// Example of Post https://jsonplaceholder.typicode.com/posts
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Example of Comment https://jsonplaceholder.typicode.com/comments?postId=1
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
