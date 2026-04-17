import { mockTeamMembers } from "@/lib/mock-data";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeader } from "@/components/ui/section-header";
import { TeamCard } from "@/components/ui/team-card";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { AppointmentCTA } from "@/components/sections/appointment-cta";

export const metadata = {
  title: "Đội Ngũ Bác Sĩ - Nha Khoa",
  description: "Đội ngũ bác sĩ nha khoa giàu kinh nghiệm, tận tâm chăm sóc sức khỏe răng miệng cho bạn.",
};

export default function TeamPage() {
  return (
    <>
      <Breadcrumb
        title="Đội Ngũ Bác Sĩ"
        items={[{ label: "Đội Ngũ Bác Sĩ" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeader
            subtitle="Đội ngũ chuyên gia"
            title="Bác Sĩ Giàu Kinh Nghiệm"
            description="Đội ngũ bác sĩ của chúng tôi luôn sẵn sàng mang đến dịch vụ chăm sóc răng miệng tốt nhất cho bạn."
          />

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockTeamMembers.map((member) => (
              <TeamCard
                key={member.id}
                id={member.id}
                name={member.name}
                specialization={member.specialization}
                avatar={member.avatar}
              />
            ))}
          </StaggerChildren>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
