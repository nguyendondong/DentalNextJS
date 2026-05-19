import { fetchAPI } from "./client";
import { API_ENDPOINTS } from "./api";
import type { ReviewsResponse, FAQsResponse, BenefitsResponse } from "@/lib/types";

export async function getReviews(): Promise<ReviewsResponse> {
  return fetchAPI<ReviewsResponse>(API_ENDPOINTS.LANDING.CONTENT("reviews"));
}

export async function getFAQs(): Promise<FAQsResponse> {
  return fetchAPI<FAQsResponse>(API_ENDPOINTS.LANDING.CONTENT("faqs"));
}

export async function getBenefits(): Promise<BenefitsResponse> {
  return fetchAPI<BenefitsResponse>(API_ENDPOINTS.LANDING.ABOUT("benefits"));
}
