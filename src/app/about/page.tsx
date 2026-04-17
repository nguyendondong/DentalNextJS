import { getBenefits, getTeam, getReviews } from "@/lib/api";
import { mockStats, mockPartners } from "@/lib/mock-data";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { AboutSection } from "@/components/sections/about-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { HowItWorks } from "@/components/sections/how-it-works";
import { StatsCounter } from "@/components/sections/stats-counter";
import { PartnersCarousel } from "@/components/sections/partners-carousel";
import { TeamSection } from "@/components/sections/team-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AppointmentCTA } from "@/components/sections/appointment-cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới Thiệu",
  description: "Tìm hiểu về phòng khám nha khoa Myra Dental với đội ngũ bác sĩ giàu kinh nghiệm và dịch vụ chăm sóc răng miệng chất lượng cao.",
  openGraph: {
    title: "Giới Thiệu | Myra Dental",
    description: "Tìm hiểu về phòng khám nha khoa Myra Dental với đội ngũ bác sĩ giàu kinh nghiệm.",
    images: ["/images/logo.svg"],
  },
};

export default async function AboutPage() {
  const [benefitsData, teamData, reviewsData] = await Promise.all([
    getBenefits(),
    getTeam(),
    getReviews(),
  ]);

  return (
    <>
      <Breadcrumb
        title="Giới Thiệu"
        items={[{ label: "Giới Thiệu" }]}
      />
      <AboutSection />
      <WhyChooseUs benefits={benefitsData.benefits} />
      <HowItWorks />
      <StatsCounter stats={mockStats} />
      <PartnersCarousel partners={mockPartners} />
      <TeamSection team={teamData.team} />
      <TestimonialsSection reviews={reviewsData.reviews} />
      <AppointmentCTA />
    </>
  );
}
