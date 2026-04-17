import type { MetadataRoute } from "next";
import { mockServices } from "@/lib/mock-data";
import { blogPosts } from "@/lib/mock-data";
import { mockTeamMembers } from "@/lib/mock-data";

const BASE_URL = "https://myradental.com";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/services",
  "/team",
  "/blog",
  "/contact",
  "/appointment",
  "/faqs",
  "/gallery",
  "/technology",
  "/testimonials",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = mockServices.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const teamRoutes: MetadataRoute.Sitemap = mockTeamMembers.map((m) => ({
    url: `${BASE_URL}/team/${m.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...teamRoutes];
}
