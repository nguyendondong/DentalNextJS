"use client";

import Image from "next/image";
import type { Partner } from "@/lib/types";

interface PartnersCarouselProps {
  partners: Partner[];
}

export function PartnersCarousel({ partners }: PartnersCarouselProps) {
  // Duplicate for infinite scroll effect
  const items = [...partners, ...partners];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 mb-8">
        <p className="text-center text-text-muted text-sm uppercase tracking-wider font-medium">
          Đối tác bảo hiểm liên kết
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll gap-16 w-max">
          {items.map((partner, i) => (
            <div
              key={`${partner.id}-${i}`}
              className="flex items-center justify-center w-40 h-16 shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.logoUrl}
                alt={partner.name}
                width={160}
                height={64}
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
