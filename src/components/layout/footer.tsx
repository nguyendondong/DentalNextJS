import type { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import type { SiteInfoResponse } from "@/lib/types";

const FALLBACK_FOOTER: Pick<
  SiteInfoResponse,
  "organization" | "contact" | "social" | "footer"
> = {
  organization: {
    name: "Myra Dental",
    url: "/",
    logo: "/images/logo.svg",
    description: "Phòng khám nha khoa uy tín",
  },
  contact: {
    phone: "0123 456 789",
    email: "info@myradental.vn",
    address: {
      full: "123 Đường ABC, Quận 1, TP.HCM",
      city: "TP.HCM",
      ward: "",
      street: "",
      country: "Việt Nam",
      district: "Quận 1",
    },
    openingHours: {
      weekdays: {
        days: ["T2", "T3", "T4", "T5", "T6", "T7"],
        opens: "08:00",
        closes: "20:00",
        display: "T2 - T7: 08:00 - 20:00",
      },
      sunday: { opens: "08:00", closes: "17:00", display: "CN: 08:00 - 17:00" },
    },
  },
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    tiktok: "#",
    zalo: "#",
  },
  footer: {
    description:
      "Phòng khám nha khoa Myra Dental chuyên cung cấp dịch vụ nha khoa chất lượng cao với đội ngũ bác sĩ giàu kinh nghiệm và công nghệ hiện đại.",
  },
};

const quickLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Dịch vụ", href: "/services" },
  { label: "Đội ngũ", href: "/team" },
  { label: "Bài viết", href: "/blog" },
  { label: "Liên hệ", href: "/contact" },
];

const serviceLinks = [
  { label: "Niềng răng", href: "/services/nieng-rang" },
  { label: "Trồng răng Implant", href: "/services/trong-rang-implant" },
  { label: "Bọc răng sứ", href: "/services/boc-rang-su" },
  { label: "Tẩy trắng răng", href: "/services/tay-trang-rang" },
  { label: "Nhổ răng khôn", href: "/services/nho-rang-khon" },
];

export async function Footer() {
  let data = FALLBACK_FOOTER;

  try {
    const { getSiteInfo } = await import("@/lib/api");
    const siteInfo = await getSiteInfo();
    data = siteInfo;
  } catch {
    // Use fallback
  }

  const { organization, contact, social, footer } = data;

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <FooterAbout logo={organization.logo} description={footer.description} />
          <FooterLinks title="Liên Kết" links={quickLinks} />
          <FooterLinks title="Dịch Vụ" links={serviceLinks} />
          <FooterContact contact={contact} social={social} />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-divider">
        <div className="container mx-auto max-w-7xl px-4 py-5">
          <p className="text-center text-white/60 text-sm">
            © 2024 Myra Dental. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterAbout({ logo, description }: { logo: string; description: string }) {
  return (
    <div>
      <Link href="/" className="inline-block mb-6">
        <Image src={logo} alt="Myra Dental" width={150} height={48} className="h-10 w-auto brightness-0 invert" />
      </Link>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function FooterLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-white/70 text-sm hover:text-accent transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContact({
  contact,
  social,
}: {
  contact: SiteInfoResponse["contact"];
  social: SiteInfoResponse["social"];
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Liên Hệ</h3>
      <ul className="space-y-3 text-white/70 text-sm">
        <li className="flex gap-2">📍 {contact.address.full}</li>
        <li className="flex gap-2">📞 {contact.phone}</li>
        <li className="flex gap-2">✉️ {contact.email}</li>
        <li className="flex gap-2">🕐 {contact.openingHours.weekdays.display}</li>
      </ul>

      <div className="flex gap-3 mt-6">
        {social.facebook && <SocialIcon href={social.facebook} label="Facebook" icon="facebook" />}
        {social.instagram && <SocialIcon href={social.instagram} label="Instagram" icon="instagram" />}
        {social.youtube && <SocialIcon href={social.youtube} label="YouTube" icon="youtube" />}
        {social.tiktok && <SocialIcon href={social.tiktok} label="TikTok" icon="tiktok" />}
        {social.zalo && <SocialIcon href={social.zalo} label="Zalo" icon="zalo" />}
      </div>
    </div>
  );
}

const SOCIAL_SVGS: Record<string, JSX.Element> = {
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.773.131 4.548.425 3.465 1.508 2.382 2.59 2.088 3.815 2.03 5.095 1.972 6.375 1.958 6.783 1.958 12s.014 5.625.072 6.905c.058 1.28.352 2.505 1.435 3.588 1.083 1.083 2.308 1.377 3.588 1.435C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.28-.058 2.505-.352 3.588-1.435 1.083-1.083 1.377-2.308 1.435-3.588.058-1.28.072-1.688.072-6.905s-.014-5.625-.072-6.905c-.058-1.28-.352-2.505-1.435-3.588C20.452.425 19.227.131 17.947.072 16.667.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.882 1.44 1.44 0 000-2.882z" />
    </svg>
  ),
  youtube: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  tiktok: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  ),
  zalo: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-4 h-4">
      <path d="M24 4C12.95 4 4 12.95 4 24c0 4.62 1.56 8.88 4.16 12.31L5.7 43.06l6.93-2.22A19.88 19.88 0 0024 44c11.05 0 20-8.95 20-20S35.05 4 24 4zm-7.5 13h9.17l-9.3 10.5H26c.83 0 1.5.67 1.5 1.5S26.83 30.5 26 30.5h-9.71l9.3-10.5H16.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zm15 13.5c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5zm-7.5 0c-.83 0-1.5-.67-1.5-1.5v-5.73A3.75 3.75 0 0126.75 20c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5A.75.75 0 0026 23.75V29.5c0 .83-.67 1.5-1.5 1.5z" />
    </svg>
  ),
};

function SocialIcon({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-divider flex items-center justify-center text-white/70 hover:bg-accent hover:border-accent hover:text-white transition-colors"
    >
      {SOCIAL_SVGS[icon] ?? <span className="text-xs font-bold uppercase">{icon}</span>}
    </a>
  );
}
