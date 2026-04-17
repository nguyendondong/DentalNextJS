import Image from "next/image";
import Link from "next/link";
import { TextReveal } from "@/components/animations/text-reveal";
import { FadeInUp } from "@/components/animations/fade-in-up";
import type { HeroData } from "@/lib/types";

interface HeroSectionProps {
  hero: HeroData;
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-secondary py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-[55%]">
            <TextReveal as="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              {hero.title}
            </TextReveal>

            <FadeInUp delay={0.25}>
              <p className="text-text-muted mt-6 text-lg leading-relaxed max-w-xl">
                {hero.description}
              </p>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="mt-8">
                <Link
                  href={hero.cta.link}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-sm uppercase tracking-wide text-white hover:bg-primary transition-all duration-300"
                >
                  {hero.cta.text}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </FadeInUp>

            {/* Google Rating */}
            <FadeInUp delay={0.75}>
              <div className="mt-8 flex items-center gap-3 flex-wrap">
                <span className="text-primary font-medium">
                  Google Rating <span className="text-accent font-bold">5.0</span>
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-text-muted text-sm">492 đánh giá</span>
              </div>
            </FadeInUp>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[45%] relative">
            <FadeInUp delay={0.3}>
              <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
                <Image
                  src={hero.image}
                  alt={hero.imageAlt || "Hero"}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-contain"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
