import { fetchAPI } from "./client";
import { API_ENDPOINTS } from "./api";
import type { SiteInfoResponse } from "@/lib/types";

export async function getSiteInfo(): Promise<SiteInfoResponse> {
  return fetchAPI<SiteInfoResponse>(API_ENDPOINTS.LANDING.SITE_INFO);
}
