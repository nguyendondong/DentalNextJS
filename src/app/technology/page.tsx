import { technologyItems } from "@/lib/mock-data";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeader } from "@/components/ui/section-header";
import { AppointmentCTA } from "@/components/sections/appointment-cta";
import { ImageReveal } from "@/components/animations/image-reveal";
import { FadeInUp } from "@/components/animations/fade-in-up";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Công Nghệ",
  description: "Myra Dental sử dụng trang thiết bị và công nghệ nha khoa hiện đại nhất để mang lại kết quả điều trị tốt nhất.",
  openGraph: {
    title: "Công Nghệ Nha Khoa | Myra Dental",
    description: "Trang thiết bị và công nghệ nha khoa hiện đại tại Myra Dental.",
    images: ["/images/logo.svg"],
  },
};

export default function TechnologyPage() {
  return (
    <>
      <Breadcrumb title="Công Nghệ" items={[{ label: "Công Nghệ" }]} />

      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeader
            subtitle="Trang thiết bị hiện đại"
            title="Công Nghệ Nha Khoa"
            titleHighlight="Công Nghệ"
            description="Chúng tôi đầu tư vào những thiết bị và công nghệ nha khoa tiên tiến nhất để đảm bảo chất lượng điều trị tốt nhất cho bệnh nhân."
          />

          <div className="space-y-20">
            {technologyItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
                >
                  {/* Images */}
                  <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                    {item.images.map((img, i) => (
                      <ImageReveal key={i} delay={i * 0.15}>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                          <Image
                            src={img}
                            alt={`${item.title} ${i + 1}`}
                            fill
                            sizes="(max-width: 1024px) 50vw, 25vw"
                            className="object-cover"
                          />
                        </div>
                      </ImageReveal>
                    ))}
                  </div>

                  {/* Text */}
                  <div className="w-full lg:w-1/2">
                    <FadeInUp>
                      <span className="text-accent font-medium text-sm uppercase tracking-wider">
                        Công nghệ {String(item.order).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-primary mt-3 mb-4">
                        {item.title}
                      </h2>
                      <p className="text-text-muted leading-relaxed">{item.description}</p>
                    </FadeInUp>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
