import { buildApiUrl } from "./api";

export async function fetchAPI<T>(
  endpoint: string,
  revalidate = 3600
): Promise<T> {
  const url = buildApiUrl(endpoint);

  try {
    const res = await fetch(url, {
      next: { revalidate },
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText} - ${url}`);
    }

    return res.json() as Promise<T>;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch ${endpoint}: ${error.message}`);
    }
    throw error;
  }
}
