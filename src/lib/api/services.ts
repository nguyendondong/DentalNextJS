import { fetchAPI } from "./client";
import type { ServicesResponse } from "@/lib/types";

export async function getFeaturedServices(): Promise<ServicesResponse> {
  return fetchAPI<ServicesResponse>("/landing/services?featured=true");
}
