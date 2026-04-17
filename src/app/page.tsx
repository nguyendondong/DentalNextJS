import type { Metadata } from "next";
import { getHeader, getSiteInfo, getFeaturedServices, getBenefits, getTeam, getReviews, getFAQs } from "@/lib/api";
import { HeroSection } from "@/components/sections/hero-section";
import { CTABoxes } from "@/components/sections/cta-boxes";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { VisitClinicVideo } from "@/components/sections/visit-clinic-video";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TeamSection } from "@/components/sections/team-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";

export const metadata: Metadata = {
  title: "Myra Dental - Phòng Khám Nha Khoa Uy Tín",
  description:
    "Myra Dental - Phòng khám nha khoa uy tín chuyên niềng răng, trồng răng, bọc răng sứ với công nghệ hiện đại và đội ngũ bác sĩ giàu kinh nghiệm.",
  openGraph: {
    title: "Myra Dental - Phòng Khám Nha Khoa Uy Tín",
    description: "Phòng khám nha khoa uy tín chuyên niềng răng, trồng răng, bọc răng sứ.",
    images: ["/images/logo.svg"],
  },
};

export default async function Home() {
  const [headerData, siteInfo, servicesData, benefitsData, teamData, reviewsData, faqsData] = await Promise.all([
    getHeader(),
    getSiteInfo(),
    getFeaturedServices(),
    getBenefits(),
    getTeam(),
    getReviews(),
    getFAQs(),
  ]);

  return (
    <>
      <HeroSection hero={headerData.hero} />
      <CTABoxes contact={siteInfo.contact} />
      <AboutSection />
      <ServicesSection data={servicesData} />
      <VisitClinicVideo />
      <WhyChooseUs benefits={benefitsData.benefits} />
      <HowItWorks />
      <TeamSection team={teamData.team} />
      <TestimonialsSection reviews={reviewsData.reviews} />
      <FAQSection faqs={faqsData.faqs} />
    </>
  );
}
