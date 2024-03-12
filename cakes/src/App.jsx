import "./index.css";
// import Home from "./components/Home/Home";
import Recipe from "./components/Recipes/Recipe";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <Home /> */}
        <Recipe />
      </QueryClientProvider>
    </>
  );
}

export default App;
