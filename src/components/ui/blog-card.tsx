import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/animations/fade-in-up";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  className?: string;
}

// Deterministic - same output on server and client
function formatDate(dateStr: string): string {
  const s = dateStr.split("T")[0].split("-");
  return `${s[2]}/${s[1]}/${s[0]}`;
}

export function BlogCard({
  title,
  slug,
  excerpt,
  imageUrl,
  publishedAt,
  className,
}: BlogCardProps) {
  return (
    <FadeInUp className={className}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden aspect-[16/10]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-4 left-4 bg-accent text-white text-xs font-medium px-3 py-1.5 rounded-full z-10">
            {formatDate(publishedAt)}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-primary line-clamp-2 mb-3 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-text-muted text-sm line-clamp-3 mb-4 flex-1">
            {excerpt}
          </p>
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:text-primary transition-colors"
          >
            Đọc thêm
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </FadeInUp>
  );
}
