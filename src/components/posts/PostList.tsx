import { usePosts } from "../../hooks/usePosts";
import { PostItem } from "./PostItem";
import { Post } from "../../types";
import LoadingMessage from "../ui/LoadingMessage";
import ErrorMessage from "../ui/ErrorMessage";

export default function PostList() {
  const { data: posts, isLoading, isError, error } = usePosts();

  if (isLoading) return <LoadingMessage message="posts" />;
  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {posts?.map((post: Post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
