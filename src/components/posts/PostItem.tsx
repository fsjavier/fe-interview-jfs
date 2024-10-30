import { Post } from "../../types";

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <div className="bg-background-card text-text-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
