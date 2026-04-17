import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { FadeInUp } from "@/components/animations/fade-in-up";
import type { ServicesResponse } from "@/lib/types";

interface ServicesSectionProps {
  data: ServicesResponse;
}

export function ServicesSection({ data }: ServicesSectionProps) {
  const { section, services } = data;

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          subtitle={section.subtitle}
          title={section.title}
          description={section.description}
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              imageUrl={service.imageUrl}
              href={`/services/${service.slug ?? service.id}`}
            />
          ))}
        </StaggerChildren>

        <FadeInUp delay={0.4}>
          <div className="text-center mt-12">
            <Button href="/services">Xem tất cả dịch vụ</Button>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
