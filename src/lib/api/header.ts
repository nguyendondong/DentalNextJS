import { fetchAPI } from "./client";
import type { HeaderResponse } from "@/lib/types";

export async function getHeader(): Promise<HeaderResponse> {
  return fetchAPI<HeaderResponse>("/landing/header");
}
