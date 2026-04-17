import { fetchAPI } from "./client";
import type { TeamResponse } from "@/lib/types";

export async function getTeam(): Promise<TeamResponse> {
  return fetchAPI<TeamResponse>("/landing/about?include=team");
}
