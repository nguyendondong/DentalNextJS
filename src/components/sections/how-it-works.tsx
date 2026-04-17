import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { Accordion } from "@/components/ui/accordion";
import { ImageReveal } from "@/components/animations/image-reveal";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { mockProcessSteps } from "@/lib/mock-data";

export function HowItWorks() {
  const accordionItems = mockProcessSteps.map((step) => ({
    id: step.id,
    title: `${step.step}. ${step.title}`,
    content: step.description,
  }));

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <ImageReveal className="rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/how-it-work-img.jpg"
                alt="Quy trình điều trị"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </ImageReveal>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <SectionHeader
              subtitle="Quy trình"
              title="Quy Trình Điều Trị Tại Phòng Khám"
              description="Chúng tôi cam kết mang đến quy trình chăm sóc chuyên nghiệp, hiện đại và tiện lợi nhất cho bạn."
              align="left"
            />

            <FadeInUp delay={0.2}>
              <Accordion items={accordionItems} />
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
