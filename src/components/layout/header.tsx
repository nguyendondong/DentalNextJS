import { StickyHeader, type NavItem } from "./sticky-header";

const navItems: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  {
    label: "Dịch vụ",
    href: "/services",
    children: [
      { label: "Niềng răng", href: "/services/nieng-rang" },
      { label: "Trồng răng Implant", href: "/services/trong-rang-implant" },
      { label: "Bọc răng sứ", href: "/services/boc-rang-su" },
      { label: "Tẩy trắng răng", href: "/services/tay-trang-rang" },
      { label: "Nhổ răng khôn", href: "/services/nho-rang-khon" },
    ],
  },
  { label: "Đội ngũ", href: "/team" },
  { label: "Bài viết", href: "/blog" },
  { label: "Liên hệ", href: "/contact" },
];

const FALLBACK_LOGO = "/images/logo.svg";

export async function Header() {
  let logo = FALLBACK_LOGO;

  try {
    const { getHeader } = await import("@/lib/api");
    const data = await getHeader();
    if (data.siteInfo?.logo) {
      logo = data.siteInfo.logo;
    }
  } catch {
    // Use fallback logo
  }

  return <StickyHeader logo={logo} navItems={navItems} />;
}
