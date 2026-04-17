import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/animations/fade-in-up";

interface ServiceCardProps {
  name: string;
  description: string;
  imageUrl: string;
  href: string;
  className?: string;
}

export function ServiceCard({
  name,
  description,
  imageUrl,
  href,
  className,
}: ServiceCardProps) {
  return (
    <FadeInUp className={className}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold text-primary mb-3">{name}</h3>
          <p className="text-text-muted line-clamp-3 mb-4 flex-1">
            {description}
          </p>
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-accent font-medium hover:text-primary transition-colors"
          >
            Xem chi tiết
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
