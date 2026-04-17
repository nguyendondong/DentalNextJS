import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { Accordion } from "@/components/ui/accordion";
import { FadeInUp } from "@/components/animations/fade-in-up";
import type { FAQsResponse } from "@/lib/types";

interface FAQSectionProps {
  faqs: FAQsResponse["faqs"];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const accordionItems = faqs.items.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          subtitle={faqs.section.subtitle}
          title={faqs.section.title}
          description={faqs.section.description}
        />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: FAQ Accordion */}
          <div className="w-full lg:w-7/12">
            <FadeInUp>
              <Accordion items={accordionItems} />
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="mt-8">
                <Link
                  href="/faqs"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:text-primary transition-colors"
                >
                  Xem tất cả câu hỏi
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </FadeInUp>
          </div>

          {/* Right: CTA Block */}
          <div className="w-full lg:w-5/12">
            <FadeInUp delay={0.15}>
              <div className="bg-primary rounded-2xl p-8 text-white h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold">Bạn còn thắc mắc?</h3>
                <p className="text-white/70 mt-4 leading-relaxed">
                  Đội ngũ của chúng tôi luôn sẵn sàng giải đáp mọi câu hỏi của bạn. Hãy liên hệ ngay để được tư vấn miễn phí.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-sm uppercase tracking-wide text-white hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    Liên hệ ngay
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
