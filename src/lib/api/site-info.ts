import { fetchAPI } from "./client";
import type { SiteInfoResponse } from "@/lib/types";

export async function getSiteInfo(): Promise<SiteInfoResponse> {
  return fetchAPI<SiteInfoResponse>("/landing/site-info");
}
