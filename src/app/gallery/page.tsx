"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { galleryImages, galleryCategories } from "@/lib/mock-data";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { GalleryItem } from "@/components/ui/gallery-item";
import type { GalleryImage } from "@/lib/types";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tất Cả");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filtered =
    selectedCategory === "Tất Cả"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const currentIndex = lightboxImage
    ? filtered.findIndex((img) => img.id === lightboxImage.id)
    : -1;

  const goNext = useCallback(() => {
    if (currentIndex < filtered.length - 1) {
      setLightboxImage(filtered[currentIndex + 1]);
    }
  }, [currentIndex, filtered]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setLightboxImage(filtered[currentIndex - 1]);
    }
  }, [currentIndex, filtered]);

  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  useEffect(() => {
    if (!lightboxImage) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxImage, goNext, goPrev, closeLightbox]);

  return (
    <>
      <Breadcrumb title="Thư Viện Ảnh" items={[{ label: "Thư Viện Ảnh" }]} />

      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-accent text-white shadow-md"
                    : "bg-secondary text-text-muted hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((image) => (
              <GalleryItem key={image.id} image={image} onClick={setLightboxImage} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10 p-2"
            aria-label="Close"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M6 6l16 16M22 6L6 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Prev */}
          {currentIndex > 0 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 text-white/70 hover:text-white transition-colors p-2 z-10"
              aria-label="Previous image"
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M22 6L10 18l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.url}
              alt={lightboxImage.alt}
              width={1200}
              height={800}
              className="object-contain max-h-[85vh] w-full rounded-xl"
            />
            <p className="text-white/60 text-sm text-center mt-3">{lightboxImage.alt}</p>
          </div>

          {/* Next */}
          {currentIndex < filtered.length - 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 text-white/70 hover:text-white transition-colors p-2 z-10"
              aria-label="Next image"
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M14 6l12 12-12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
}
