import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import PostList from "./components/posts/PostList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto mt-4">
          <PostList />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
