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
        {social.facebook && <SocialIcon href={social.facebook} label="Facebook" icon="f" />}
        {social.instagram && <SocialIcon href={social.instagram} label="Instagram" icon="ig" />}
        {social.youtube && <SocialIcon href={social.youtube} label="YouTube" icon="yt" />}
        {social.tiktok && <SocialIcon href={social.tiktok} label="TikTok" icon="tt" />}
        {social.zalo && <SocialIcon href={social.zalo} label="Zalo" icon="z" />}
      </div>
    </div>
  );
}

function SocialIcon({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-divider flex items-center justify-center text-xs font-bold text-white/70 hover:bg-accent hover:border-accent hover:text-white transition-colors uppercase"
    >
      {icon}
    </a>
  );
}
