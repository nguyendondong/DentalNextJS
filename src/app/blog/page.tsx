import { blogPosts } from "@/lib/mock-data";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { BlogCard } from "@/components/ui/blog-card";
import { BlogSidebar } from "@/components/sections/blog-sidebar";

export const metadata = {
  title: "Bài Viết - Nha Khoa",
  description: "Cập nhật những kiến thức và thông tin mới nhất về sức khỏe răng miệng từ đội ngũ chuyên gia.",
};

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map((p) => p.category))];
  const allTags = [...new Set(blogPosts.flatMap((p) => p.tags))];
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Breadcrumb title="Bài Viết" items={[{ label: "Bài Viết" }]} />

      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    slug={post.slug}
                    excerpt={post.excerpt}
                    imageUrl={post.imageUrl}
                    publishedAt={post.publishedAt}
                  />
                ))}
              </div>
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
