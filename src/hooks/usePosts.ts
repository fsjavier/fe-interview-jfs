import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../services/apiMock";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
}
