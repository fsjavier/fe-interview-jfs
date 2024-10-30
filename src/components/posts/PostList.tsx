import { usePosts } from "../../hooks/usePosts";
import { PostItem } from "./PostItem";
import { Post } from "../../types";

export default function PostList() {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <div className="text-center p-4">Loading posts...</div>;
  if (error)
    return (
      <div className="text-center p-4 text-red-500">
        Error fetching posts: {error.message}
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {posts?.map((post: Post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
