import { Post } from "../types";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/posts`);
  // React Query requires a promise to be returned
  return response.json();
}
