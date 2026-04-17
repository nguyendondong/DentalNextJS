import type { Section } from "./common";

export interface ServicesResponse {
  section: Section;
  services: Service[];
}

export interface Service {
  id: number;
  name: string;
  slug?: string;
  description: string;
  imageUrl: string;
  priceRange: string | null;
  promotion: ServicePromotion | null;
  features: string[];
  featured: boolean;
  order: number;
}

export interface ServicePromotion {
  text: string;
  type: string;
  discount: number;
}

export interface ServiceDetail extends Service {
  fullContent: string;
  gallery: { url: string; alt: string }[];
  faqs: { question: string; answer: string }[];
}
