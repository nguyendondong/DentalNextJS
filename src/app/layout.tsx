import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactWidget } from "@/components/ui/contact-widget";
import { getSiteInfo } from "@/lib/api";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-poppins",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myradental.com"),
  title: {
    template: "%s | Myra Dental",
    default: "Myra Dental - Phòng Khám Nha Khoa Uy Tín",
  },
  description:
    "Myra Dental - Phòng khám nha khoa uy tín chuyên niềng răng, trồng răng, bọc răng sứ với công nghệ hiện đại và đội ngũ bác sĩ giàu kinh nghiệm.",
  keywords: "nha khoa, niềng răng, trồng răng, bọc răng sứ, tẩy trắng răng, Myra Dental",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Myra Dental",
    images: ["/images/logo.svg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteInfo = await getSiteInfo();
  const { organization, contact, social, contact: { openingHours } } = siteInfo;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: organization.name,
    description: organization.description,
    url: organization.url,
    logo: organization.logo,
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressCountry: contact.address.country,
    },
    openingHours: [
      `${openingHours.weekdays.days.join("-")} ${openingHours.weekdays.opens}-${openingHours.weekdays.closes}`,
      `Su ${openingHours.sunday.opens}-${openingHours.sunday.closes}`,
    ],
    sameAs: [social.facebook, social.instagram, social.youtube, social.tiktok].filter(Boolean),
  };

  return (
    <html lang="vi" className={`${beVietnamPro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ContactWidget
          phone={contact.phone}
          zaloUrl={social.zalo}
          messengerUrl={social.facebook ? `https://m.me/${social.facebook.split("/").filter(Boolean).pop()}` : "https://m.me/myradental"}
        />
      </body>
    </html>
  );
}
