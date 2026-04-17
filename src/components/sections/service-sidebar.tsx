import Link from "next/link";
import { mockServices } from "@/lib/mock-data";

interface ServiceSidebarProps {
  currentSlug: string;
}

export function ServiceSidebar({ currentSlug }: ServiceSidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Service Categories */}
      <div className="bg-secondary rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">Danh mục dịch vụ</h3>
        <ul className="space-y-2">
          {mockServices.map((service) => (
            <li key={service.id}>
              <Link
                href={`/services/${service.slug}`}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  service.slug === currentSlug
                    ? "bg-accent text-white font-medium"
                    : "text-text-muted hover:bg-accent/10 hover:text-primary"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm">{service.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact CTA */}
      <div className="bg-primary rounded-2xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-3">Cần tư vấn?</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-4">
          Gọi ngay cho chúng tôi để được tư vấn miễn phí về dịch vụ phù hợp nhất.
        </p>
        <a
          href="tel:+84123456789"
          className="flex items-center gap-2 text-accent font-semibold text-lg mb-4"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          0123 456 789
        </a>
        <Link
          href="/appointment"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-primary transition-all duration-300 w-full justify-center"
        >
          Đặt lịch hẹn
        </Link>
      </div>
    </aside>
  );
}
