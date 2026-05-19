import { fetchAPI } from "./client";
import { API_ENDPOINTS } from "./api";
import type { TeamResponse } from "@/lib/types";

export async function getTeam(): Promise<TeamResponse> {
  return fetchAPI<TeamResponse>(API_ENDPOINTS.LANDING.ABOUT("team"));
}
