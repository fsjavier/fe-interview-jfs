import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostList from "./components/posts/PostList";
import Layout from "./components/layout/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <PostList />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
