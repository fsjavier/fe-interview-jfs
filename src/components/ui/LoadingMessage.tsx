interface LoadingMessageProps {
  message?: string;
}

export default function LoadingMessage({ message }: LoadingMessageProps) {
  return <div className="text-center p-4">Loading {message}...</div>;
}
