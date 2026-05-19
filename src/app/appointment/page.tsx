import { getBenefits } from "@/lib/api";
import { mockServices } from "@/lib/mock-data";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đặt Lịch Hẹn",
  description: "Đặt lịch hẹn khám nha khoa trực tuyến tại Myra Dental. Đội ngũ bác sĩ sẵn sàng chăm sóc sức khỏe răng miệng cho bạn.",
  openGraph: {
    title: "Đặt Lịch Hẹn | Myra Dental",
    description: "Đặt lịch hẹn khám nha khoa trực tuyến tại Myra Dental.",
    images: ["/images/logo.svg"],
  },
};

export default async function AppointmentPage() {
  const benefitsData = await getBenefits();

  const services = mockServices.map((s) => ({
    name: s.name,
    slug: String(s.id),
  }));

  return (
    <>
      <Breadcrumb title="Đặt Lịch Hẹn" items={[{ label: "Đặt Lịch Hẹn" }]} />

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl px-4">
          <SectionHeader
            subtitle="Đặt lịch"
            title="Đặt Lịch Khám"
            description="Điền thông tin bên dưới để đặt lịch hẹn khám. Chúng tôi sẽ xác nhận qua điện thoại trong thời gian sớm nhất."
          />

          <FadeInUp>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <AppointmentForm services={services} />
            </div>
          </FadeInUp>
        </div>
      </section>

      <WhyChooseUs benefits={benefitsData.benefits} />
    </>
  );
}
