interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <div className="text-center p-4 text-red-500">Error: {message}</div>;
}
