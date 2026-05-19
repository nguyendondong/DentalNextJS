import { fetchAPI } from "./client";
import { API_ENDPOINTS } from "./api";
import type { ServicesResponse } from "@/lib/types";

export async function getFeaturedServices(): Promise<ServicesResponse> {
  return fetchAPI<ServicesResponse>(API_ENDPOINTS.LANDING.FEATURED_SERVICES);
}
