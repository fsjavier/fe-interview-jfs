import useComments from "../../hooks/useComments";
import ErrorMessage from "../ui/ErrorMessage";
import LoadingMessage from "../ui/LoadingMessage";
import CommentItem from "./CommentItem";

interface CommentListProps {
  postId: number;
}

export default function CommentList({ postId }: CommentListProps) {
  const { data: postComments, isLoading, isError, error } = useComments(postId);

  if (isLoading) return <LoadingMessage message="comments" />;
  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <div className="mt-2">
      {postComments?.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
