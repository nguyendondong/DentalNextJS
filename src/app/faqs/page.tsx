import { getFAQs } from "@/lib/api";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeader } from "@/components/ui/section-header";
import { Accordion } from "@/components/ui/accordion";
import { AppointmentCTA } from "@/components/sections/appointment-cta";
import { FadeInUp } from "@/components/animations/fade-in-up";

export const metadata = {
  title: "Câu Hỏi Thường Gặp - Nha Khoa",
  description: "Giải đáp những thắc mắc phổ biến nhất về dịch vụ và chăm sóc sức khỏe răng miệng tại phòng khám.",
};

export default async function FAQsPage() {
  const data = await getFAQs();
  const faqs = data.faqs!;

  const accordionItems = faqs.items.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <>
      <Breadcrumb title="Câu Hỏi Thường Gặp" items={[{ label: "Câu Hỏi Thường Gặp" }]} />

      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeader
            subtitle={faqs.section.subtitle}
            title={faqs.section.title}
            description={faqs.section.description}
          />

          <div className="max-w-3xl mx-auto">
            <FadeInUp>
              <Accordion items={accordionItems} />
            </FadeInUp>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
