import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { ImageReveal } from "@/components/animations/image-reveal";
import { SkillBar } from "@/components/ui/skill-bar";
import { getTeamMemberById, getAllTeamIds } from "@/lib/mock-data";

interface TeamDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getAllTeamIds().map((id) => ({ id: String(id) }));
}

export async function generateMetadata({ params }: TeamDetailPageProps) {
  const { id } = await params;
  const member = getTeamMemberById(Number(id));
  if (!member) return { title: "Không tìm thấy bác sĩ" };
  return {
    title: `${member.name} - Nha Khoa`,
    description: member.bio,
  };
}

export default async function TeamDetailPage({ params }: TeamDetailPageProps) {
  const { id } = await params;
  const member = getTeamMemberById(Number(id));
  if (!member) notFound();

  return (
    <>
      <Breadcrumb
        title={member.name}
        items={[
          { label: "Đội Ngũ Bác Sĩ", href: "/team" },
          { label: member.name },
        ]}
      />

      {/* Member Info */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Avatar */}
            <div className="w-full lg:w-2/5">
              <ImageReveal className="rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </ImageReveal>
            </div>

            {/* Details */}
            <div className="w-full lg:w-3/5">
              <FadeInUp>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{member.name}</h2>
                <p className="text-accent font-medium mt-2">{member.specialization}</p>
              </FadeInUp>

              <FadeInUp delay={0.15}>
                <p className="text-text-muted leading-relaxed mt-6">{member.bio}</p>
              </FadeInUp>

              <FadeInUp delay={0.25}>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="font-semibold text-primary w-28">Chức vụ</span>
                    <span className="text-text-muted">{member.specialization}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-primary w-28">Kinh nghiệm</span>
                    <span className="text-text-muted">{member.experience} năm</span>
                  </li>
                  {member.email && (
                    <li className="flex gap-2">
                      <span className="font-semibold text-primary w-28">Email</span>
                      <span className="text-text-muted">{member.email}</span>
                    </li>
                  )}
                </ul>
              </FadeInUp>

              {/* Social Links */}
              <FadeInUp delay={0.35}>
                <div className="flex gap-3 mt-6">
                  {member.socialLinks.facebook && (
                    <SocialLink href={member.socialLinks.facebook} label="Facebook">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </SocialLink>
                  )}
                  {member.socialLinks.youtube && (
                    <SocialLink href={member.socialLinks.youtube} label="YouTube">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </SocialLink>
                  )}
                  {member.socialLinks.instagram && (
                    <SocialLink href={member.socialLinks.instagram} label="Instagram">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </SocialLink>
                  )}
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Awards */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Awards & Bio Detail */}
            <div className="w-full lg:w-1/2">
              <FadeInUp>
                <h3 className="text-2xl font-bold text-primary mb-4">Giải thưởng & Danh hiệu</h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  Những thành tựu và giải thưởng đạt được trong quá trình hành nghề.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  {member.awards.map((award, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 flex items-center justify-center">
                      <Image src={award} alt={`Award ${i + 1}`} width={80} height={80} />
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>

            {/* Skills */}
            <div className="w-full lg:w-1/2">
              <FadeInUp>
                <h3 className="text-2xl font-bold text-primary mb-6">Kỹ năng chuyên môn</h3>
              </FadeInUp>
              {member.skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} delay={i * 0.1} />
              ))}

              {/* CTA Box */}
              <FadeInUp delay={0.4}>
                <div className="mt-8 bg-accent rounded-2xl p-8 text-white">
                  <h4 className="text-lg font-semibold mb-2">Sẵn sàng bắt đầu?</h4>
                  <p className="text-white/80 text-sm mb-4">Đặt lịch khám ngay hôm nay để được tư vấn trực tiếp.</p>
                  <Link href="/appointment" className="inline-flex items-center gap-2 bg-white text-accent px-6 py-3 rounded-full font-medium text-sm hover:bg-primary hover:text-white transition-colors">
                    Đặt lịch hẹn
                  </Link>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  );
}
