import { getReviews } from "@/lib/api";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { AppointmentCTA } from "@/components/sections/appointment-cta";
import { StaggerChildren } from "@/components/animations/stagger-children";

export const metadata = {
  title: "Đánh Giá Khách Hàng - Nha Khoa",
  description: "Cảm nhận từ hàng nghìn bệnh nhân đã tin tưởng sử dụng dịch vụ của phòng khám nha khoa chúng tôi.",
};

export default async function TestimonialsPage() {
  const data = await getReviews();
  const reviews = data.reviews!;

  return (
    <>
      <Breadcrumb title="Đánh Giá Khách Hàng" items={[{ label: "Đánh Giá Khách Hàng" }]} />

      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeader
            subtitle={reviews.section.subtitle}
            title={reviews.section.title}
            description={reviews.section.description}
          />

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.items.map((review) => (
              <TestimonialCard
                key={review.id}
                customerName={review.customerName}
                rating={review.rating}
                comment={review.comment}
                serviceUsed={review.serviceUsed}
                imageUrl={review.imageUrl}
              />
            ))}
          </StaggerChildren>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
