import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";

interface BlogSidebarProps {
  categories: string[];
  recentPosts: BlogPost[];
  tags: string[];
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function BlogSidebar({ categories, recentPosts, tags }: BlogSidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div className="bg-secondary rounded-2xl p-6">
        <h3 className="text-lg font-bold text-primary mb-4">Danh Mục</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <span className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors cursor-pointer py-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent shrink-0">
                  <path d="M2 7h10m0 0L7 2m5 5L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {cat}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-secondary rounded-2xl p-6">
        <h3 className="text-lg font-bold text-primary mb-4">Bài Viết Gần Đây</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-3 group">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary line-clamp-2 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </p>
                <p className="text-xs text-text-muted mt-1">{formatDate(post.publishedAt)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-secondary rounded-2xl p-6">
        <h3 className="text-lg font-bold text-primary mb-4">Thẻ Tag</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-white border border-dark-divider rounded-full text-xs text-text-muted hover:bg-accent hover:text-white hover:border-accent transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
