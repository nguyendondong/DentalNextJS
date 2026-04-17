import { getSiteInfo } from "@/lib/api";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { ImageReveal } from "@/components/animations/image-reveal";
import { ContactForm } from "@/components/forms/contact-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên Hệ",
  description: "Liên hệ Myra Dental để được tư vấn và đặt lịch hẹn khám nha khoa.",
  openGraph: {
    title: "Liên Hệ | Myra Dental",
    description: "Liên hệ Myra Dental để được tư vấn và đặt lịch hẹn khám nha khoa.",
    images: ["/images/logo.svg"],
  },
};

export default async function ContactPage() {
  const siteInfo = await getSiteInfo();
  const { contact, social } = siteInfo;

  const infoCards = [
    {
      icon: LocationIcon,
      title: "Địa chỉ",
      lines: [contact.address.full],
    },
    {
      icon: PhoneIcon,
      title: "Điện thoại",
      lines: [contact.phone],
    },
    {
      icon: EmailIcon,
      title: "Email",
      lines: [contact.email],
    },
    {
      icon: ClockIcon,
      title: "Giờ làm việc",
      lines: [
        contact.openingHours.weekdays.display,
        contact.openingHours.sunday.display,
      ],
    },
  ];

  return (
    <>
      <Breadcrumb title="Liên Hệ" items={[{ label: "Liên Hệ" }]} />

      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="w-full lg:w-1/2">
              <SectionHeader
                subtitle="Thông tin liên hệ"
                title="Kết Nối Với Chúng Tôi"
                description="Liên hệ phòng khám để được tư vấn và đặt lịch hẹn khám răng."
                align="left"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {infoCards.map((card, i) => (
                  <FadeInUp key={card.title} delay={i * 0.1}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <card.icon />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary text-sm">{card.title}</h3>
                        {card.lines.map((line, j) => (
                          <p key={j} className="text-text-muted text-sm mt-1">{line}</p>
                        ))}
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="w-full lg:w-1/2">
              <FadeInUp>
                <div className="rounded-2xl overflow-hidden h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6696584237106!2d106.65680667573686!3d10.762622259460817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee10a4dab21%3A0x839d0fc4df5e3b10!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBZIETGsOG7o2MgVFAuSENN!5e0!3m2!1svi!2svn!4v1703158537552!5m2!1svi!2svn"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: 400 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bản đồ phòng khám"
                  />
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <ImageReveal className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/contact-us-img.jpg"
                  alt="Liên hệ nha khoa"
                  className="w-full h-full object-cover"
                />
              </ImageReveal>
            </div>
            <div className="w-full lg:w-1/2">
              <SectionHeader
                subtitle="Liên hệ"
                title="Gửi Tin Nhắn Cho Chúng Tôi"
                align="left"
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function LocationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E84B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E84B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E84B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E84B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
