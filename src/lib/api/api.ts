type LandingContentInclude = "reviews" | "faqs";
type LandingAboutInclude = "benefits" | "team";

export const API_ENDPOINTS = {
  LANDING: {
    SITE_INFO: "/landing/site-info",
    HEADER: "/landing/header",
    FEATURED_SERVICES: "/landing/services?featured=true",
    CONTENT: (include: LandingContentInclude) => `/landing/content?include=${include}`,
    ABOUT: (include: LandingAboutInclude) => `/landing/about?include=${include}`,
    CONTACT: "/landing/contact",
    APPOINTMENT: "/landing/appointment",
  },
} as const;

export function getApiBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!url) {
    throw new Error("Missing environment variable: NEXT_PUBLIC_API_BASE_URL");
  }
  return url;
}

export function buildApiUrl(endpoint: string): string {
  return `${getApiBaseUrl()}${endpoint}`;
}