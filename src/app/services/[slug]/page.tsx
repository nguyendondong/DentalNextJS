import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Accordion } from "@/components/ui/accordion";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { ServiceSidebar } from "@/components/sections/service-sidebar";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/mock-data";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Dịch vụ không tìm thấy" };
  return {
    title: `${service.name} - Nha Khoa`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const faqItems = service.faqs.map((faq, i) => ({
    id: i,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <>
      <Breadcrumb
        title={service.name}
        items={[
          { label: "Dịch Vụ", href: "/services" },
          { label: service.name },
        ]}
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <FadeInUp>
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </FadeInUp>

              <FadeInUp delay={0.15}>
                <div
                  className="prose prose-lg max-w-none text-text-muted leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: service.fullContent }}
                />
              </FadeInUp>

              {/* Features */}
              <FadeInUp delay={0.3}>
                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-primary mb-4">Đặc điểm nổi bật</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E84B5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>

              {/* Price Range */}
              {service.priceRange && (
                <FadeInUp delay={0.4}>
                  <div className="mt-8 p-6 bg-secondary rounded-2xl">
                    <p className="text-sm text-text-muted">Chi phí tham khảo</p>
                    <p className="text-2xl font-bold text-primary mt-1">{service.priceRange}</p>
                  </div>
                </FadeInUp>
              )}

              {/* FAQs */}
              {faqItems.length > 0 && (
                <FadeInUp delay={0.5}>
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold text-primary mb-6">Câu hỏi thường gặp</h3>
                    <Accordion items={faqItems} />
                  </div>
                </FadeInUp>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <ServiceSidebar currentSlug={slug} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
