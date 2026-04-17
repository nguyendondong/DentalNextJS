import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeInUp } from "@/components/animations/fade-in-up";
import type { BenefitsResponse } from "@/lib/types";

interface WhyChooseUsProps {
  benefits: BenefitsResponse["benefits"];
}

function BenefitIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E84B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function WhyChooseUs({ benefits }: WhyChooseUsProps) {
  const items = benefits.items;
  const leftItems = items.slice(0, 2);
  const rightItems = items.slice(2, 4);

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          subtitle={benefits.section.subtitle}
          title={benefits.section.title}
          description={benefits.section.description}
        />

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Items */}
          <div className="w-full lg:w-1/3 space-y-8">
            {leftItems.map((item, i) => (
              <FadeInUp key={item.id} delay={i * 0.15}>
                <div className="flex items-start gap-4 lg:text-right lg:flex-row-reverse">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <BenefitIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                    <p className="text-text-muted text-sm mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-1/3">
            <FadeInUp delay={0.2}>
              <div className="relative w-full max-w-xs mx-auto aspect-[3/4]">
                <Image
                  src="/images/why-choose-us-img.png"
                  alt="Tại sao chọn chúng tôi"
                  fill
                  sizes="(max-width: 768px) 80vw, 33vw"
                  className="object-contain"
                />
              </div>
            </FadeInUp>
          </div>

          {/* Right Items */}
          <div className="w-full lg:w-1/3 space-y-8">
            {rightItems.map((item, i) => (
              <FadeInUp key={item.id} delay={i * 0.15}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <BenefitIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                    <p className="text-text-muted text-sm mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
