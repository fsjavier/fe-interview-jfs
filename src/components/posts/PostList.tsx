import { usePosts } from "../../hooks/usePosts";
import { PostItem } from "./PostItem";
import { Post } from "../../types";
import LoadingMessage from "../ui/LoadingMessage";
import ErrorMessage from "../ui/ErrorMessage";
import { useStore } from "../store/useStore";

export default function PostList() {
  const { data: posts, isLoading, isError, error } = usePosts();
  const { searchQuery } = useStore();

  if (isLoading) return <LoadingMessage message="posts" />;
  if (isError) return <ErrorMessage message={error.message} />;

  const filteredPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {filteredPosts?.map((post: Post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
