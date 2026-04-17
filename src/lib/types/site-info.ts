export interface SiteInfoResponse {
  organization: Organization;
  contact: Contact;
  social: SocialLinks;
  footer: FooterInfo;
  seo: SEOInfo;
}

export interface Organization {
  name: string;
  url: string;
  logo: string;
  description: string;
}

export interface Contact {
  phone: string;
  email: string;
  address: Address;
  openingHours: OpeningHours;
}

export interface Address {
  city: string;
  full: string;
  ward: string;
  street: string;
  country: string;
  district: string;
}

export interface OpeningHours {
  sunday: DayHours;
  weekdays: WeekdayHours;
}

export interface DayHours {
  opens: string;
  closes: string;
  display: string;
}

export interface WeekdayHours {
  days: string[];
  opens: string;
  closes: string;
  display: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  youtube: string;
  tiktok: string;
  zalo: string;
}

export interface FooterInfo {
  description: string;
}

export interface SEOInfo {
  title: string;
  description: string;
  keywords: string;
  image: string;
  canonicalUrl: string;
}
