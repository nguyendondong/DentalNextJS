import Image from "next/image";
import Link from "next/link";
import { ImageReveal } from "@/components/animations/image-reveal";

interface TeamCardProps {
  name: string;
  specialization: string;
  avatar: string;
  id: number;
  className?: string;
}

export function TeamCard({
  name,
  specialization,
  avatar,
  id,
  className,
}: TeamCardProps) {
  return (
    <div className={`group ${className ?? ""}`}>
      <Link href={`/team/${id}`}>
        <ImageReveal className="rounded-2xl overflow-hidden aspect-[3/4]">
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
            <span className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14m-7-7h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </ImageReveal>

        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
            {name}
          </h3>
          <p className="text-text-muted text-sm mt-1">{specialization}</p>
        </div>
      </Link>
    </div>
  );
}
