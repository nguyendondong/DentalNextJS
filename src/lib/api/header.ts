import { fetchAPI } from "./client";
import { API_ENDPOINTS } from "./api";
import type { HeaderResponse } from "@/lib/types";

export async function getHeader(): Promise<HeaderResponse> {
  return fetchAPI<HeaderResponse>(API_ENDPOINTS.LANDING.HEADER);
}
