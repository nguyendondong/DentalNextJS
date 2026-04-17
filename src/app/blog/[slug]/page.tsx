import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts, getBlogBySlug, getAllBlogSlugs } from "@/lib/mock-data";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { BlogCard } from "@/components/ui/blog-card";
import { BlogSidebar } from "@/components/sections/blog-sidebar";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Bài Viết" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Myra Dental`,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}

function formatDate(dateStr: string): string {
  const s = dateStr.split("T")[0].split("-");
  const months = ["tháng 1","tháng 2","tháng 3","tháng 4","tháng 5","tháng 6","tháng 7","tháng 8","tháng 9","tháng 10","tháng 11","tháng 12"];
  return `${parseInt(s[2])} ${months[parseInt(s[1]) - 1]}, ${s[0]}`;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  const categories = [...new Set(blogPosts.map((p) => p.category))];
  const allTags = [...new Set(blogPosts.flatMap((p) => p.tags))];
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Breadcrumb
        title={post.title}
        items={[{ label: "Bài Viết", href: "/blog" }, { label: post.title }]}
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main */}
            <div className="w-full lg:w-2/3">
              {/* Featured Image */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-text-muted">
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm-5 6a5 5 0 0110 0H3z" fill="currentColor" />
                  </svg>
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5 1v4M11 1v4M1 7h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {formatDate(post.publishedAt)}
                </span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-secondary rounded-full text-xs text-text-muted border border-dark-divider">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div
                className="prose prose-lg max-w-none text-text-muted [&_h2]:text-primary [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Related Posts */}
              {post.relatedPosts.length > 0 && (
                <div className="mt-12 pt-8 border-t border-dark-divider">
                  <h2 className="text-2xl font-bold text-primary mb-6">Bài Viết Liên Quan</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {post.relatedPosts.map((related) => (
                      <BlogCard
                        key={related.id}
                        title={related.title}
                        slug={related.slug}
                        excerpt={related.excerpt}
                        imageUrl={related.imageUrl}
                        publishedAt={related.publishedAt}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <BlogSidebar
                categories={categories}
                recentPosts={recentPosts}
                tags={allTags}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
