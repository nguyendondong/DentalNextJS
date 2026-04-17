import { fetchAPI } from "./client";
import type { ReviewsResponse, FAQsResponse, BenefitsResponse } from "@/lib/types";

export async function getReviews(): Promise<ReviewsResponse> {
  return fetchAPI<ReviewsResponse>("/landing/content?include=reviews");
}

export async function getFAQs(): Promise<FAQsResponse> {
  return fetchAPI<FAQsResponse>("/landing/content?include=faqs");
}

export async function getBenefits(): Promise<BenefitsResponse> {
  return fetchAPI<BenefitsResponse>("/landing/about?include=benefits");
}
