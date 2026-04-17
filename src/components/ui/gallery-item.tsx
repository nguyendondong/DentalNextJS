"use client";

import Image from "next/image";
import type { GalleryImage } from "@/lib/types";

interface GalleryItemProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
}

export function GalleryItem({ image, onClick }: GalleryItemProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(image)}
      className="group relative overflow-hidden rounded-xl aspect-square w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label={`View ${image.alt}`}
    >
      <Image
        src={image.thumbnailUrl}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex items-center justify-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="2" />
          <path d="M14 20h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </button>
  );
}
