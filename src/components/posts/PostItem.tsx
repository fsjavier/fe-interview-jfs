import { useState } from "react";
import { Post } from "../../types";
import CommentList from "../comments/CommentList";

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  const [showComments, setShowComments] = useState(false);
  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  return (
    <div className="bg-background-card text-text-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p>{post.body}</p>
      <button
        onClick={toggleComments}
        className="mt-4 text-text-secondary hover:underline"
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <CommentList postId={post.id} />}
    </div>
  );
}
