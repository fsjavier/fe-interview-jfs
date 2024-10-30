import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../services/apiMock";

export default function useComments(postId: number) {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });
}
