import type { Section } from "./common";

export interface ReviewsResponse {
  reviews: {
    section: Section;
    items: Review[];
  };
  faqs: null;
}

export interface Review {
  id: number;
  customerName: string;
  rating: number;
  comment: string;
  serviceUsed: string;
  imageUrl: string;
  order: number;
}

export interface FAQsResponse {
  reviews: null;
  faqs: {
    section: Section;
    items: FAQ[];
  };
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  order: number;
}

export interface BenefitsResponse {
  team: null;
  benefits: {
    section: Section;
    items: Benefit[];
  };
}

export interface Benefit {
  id: number;
  icon: string;
  title: string;
  description: string;
  order: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon?: string;
  description?: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  url?: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  publishedAt: string;
  tags: string[];
  category: string;
}

export interface BlogDetail extends BlogPost {
  content: string;
  relatedPosts: BlogPost[];
}

export interface GalleryImage {
  id: string;
  url: string;
  thumbnailUrl: string;
  alt: string;
  category: string;
  order: number;
}

export interface TechnologyItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  order: number;
}
