"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import type { Review } from "@/lib/types";

interface TestimonialsSectionProps {
  reviews: {
    section: { title: string; subtitle: string; description: string };
    items: Review[];
  };
}

export function TestimonialsSection({ reviews }: TestimonialsSectionProps) {
  const [current, setCurrent] = useState(0);
  const items = reviews.items;

  const prev = () => setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          subtitle={reviews.section.subtitle}
          title={reviews.section.title}
          description={reviews.section.description}
        />

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35 }}
            >
              <TestimonialCard
                customerName={items[current].customerName}
                rating={items[current].rating}
                comment={items[current].comment}
                serviceUsed={items[current].serviceUsed}
                imageUrl={items[current].imageUrl}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors flex items-center justify-center"
              aria-label="Trước"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={items[i].id}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-accent" : "bg-accent/30"
                  }`}
                  aria-label={`Đánh giá ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors flex items-center justify-center"
              aria-label="Sau"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
