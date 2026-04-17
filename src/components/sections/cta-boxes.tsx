import Link from "next/link";
import { FadeInUp } from "@/components/animations/fade-in-up";
import type { Contact } from "@/lib/types";

interface CTABoxesProps {
  contact: Contact;
}

export function CTABoxes({ contact }: CTABoxesProps) {
  return (
    <section className="relative -mt-10 z-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-xl">
          {/* Phone Box */}
          <FadeInUp>
            <div className="bg-accent p-8 flex items-center gap-5 text-white h-full">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Cần dịch vụ nha khoa?</h3>
                <p className="text-white/80 text-sm mt-1">Gọi ngay: {contact.phone}</p>
              </div>
            </div>
          </FadeInUp>

          {/* Hours Box */}
          <FadeInUp delay={0.15}>
            <div className="bg-primary p-8 flex items-center gap-5 text-white h-full">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Giờ làm việc</h3>
                <p className="text-white/80 text-sm mt-1">{contact.openingHours.weekdays.display}</p>
              </div>
            </div>
          </FadeInUp>

          {/* Appointment Box */}
          <FadeInUp delay={0.3}>
            <div className="bg-accent p-8 flex items-center justify-center h-full">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-sm uppercase tracking-wide text-accent hover:bg-primary hover:text-white transition-all duration-300"
              >
                Đặt lịch hẹn
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
