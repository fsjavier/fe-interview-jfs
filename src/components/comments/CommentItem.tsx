import { Comment } from "../../types";

interface CommentProps {
  comment: Comment;
}

export default function CommentItem({ comment }: CommentProps) {
  return (
    <div className="border-t p-2 text-text-primary">
      <p className="font-semibold">
        {comment.name} ({comment.email})
      </p>
      <p>{comment.body}</p>
    </div>
  );
}
