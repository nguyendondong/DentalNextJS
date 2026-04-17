import { SectionHeader } from "@/components/ui/section-header";
import { TeamCard } from "@/components/ui/team-card";
import { Button } from "@/components/ui/button";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { FadeInUp } from "@/components/animations/fade-in-up";
import type { TeamResponse } from "@/lib/types";

interface TeamSectionProps {
  team: TeamResponse["team"];
}

export function TeamSection({ team }: TeamSectionProps) {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        {team.section && (
          <SectionHeader
            subtitle={team.section.subtitle}
            title={team.section.title}
            description={team.section.description}
          />
        )}

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.members.map((member) => (
            <TeamCard
              key={member.id}
              id={member.id}
              name={member.name}
              specialization={member.specialization}
              avatar={member.avatar}
            />
          ))}
        </StaggerChildren>

        <FadeInUp delay={0.4}>
          <div className="text-center mt-12">
            <Button href="/team">Xem đội ngũ</Button>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
