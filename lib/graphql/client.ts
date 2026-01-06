import { GraphQLClient } from "graphql-request";

const HYGRAPH_ENDPOINT = "https://api-ap-south-1.hygraph.com/v2/cl6byqleu0gyn01uh024a4k2i/master";

// Legacy client - kept for backwards compatibility
export const client = new GraphQLClient(HYGRAPH_ENDPOINT);

// New fetch-based function that respects Next.js caching
export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
  options?: { revalidate?: number | false }
): Promise<T> {
  const res = await fetch(HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: variables ?? {} }),
    next: { revalidate: options?.revalidate ?? 300 }, // 5 minutes default
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`GraphQL request failed: ${res.status} - ${errorBody}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(json.errors[0]?.message ?? 'GraphQL error');
  }

  return json.data as T;
}