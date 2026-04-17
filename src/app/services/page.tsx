import { getBenefits } from "@/lib/api";
import { mockServices } from "@/lib/mock-data";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { AppointmentCTA } from "@/components/sections/appointment-cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch Vụ",
  description: "Khám phá các dịch vụ nha khoa chất lượng cao tại Myra Dental: chụp X-Quang, trám răng, niềng răng, trồng răng Implant.",
  openGraph: {
    title: "Dịch Vụ Nha Khoa | Myra Dental",
    description: "Khám phá các dịch vụ nha khoa chất lượng cao tại Myra Dental.",
    images: ["/images/logo.svg"],
  },
};

export default async function ServicesPage() {
  const benefitsData = await getBenefits();

  return (
    <>
      <Breadcrumb
        title="Dịch Vụ"
        items={[{ label: "Dịch Vụ" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeader
            subtitle="Dịch vụ của chúng tôi"
            title="Dịch Vụ Nha Khoa Chuyên Nghiệp"
            description="Chúng tôi cung cấp đầy đủ các dịch vụ nha khoa từ tổng quát đến chuyên sâu với đội ngũ bác sĩ giàu kinh nghiệm."
          />

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockServices.map((service) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                description={service.description}
                imageUrl={service.imageUrl}
                href={`/services/${service.slug}`}
              />
            ))}
          </StaggerChildren>
        </div>
      </section>

      <WhyChooseUs benefits={benefitsData.benefits} />
      <AppointmentCTA />
    </>
  );
}
