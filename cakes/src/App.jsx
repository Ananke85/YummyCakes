import "./index.css";
import Home from "./components/Home/Home";
// import Recipe from "./components/Recipes/Recipe";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CAKERECIPE, HOME } from "./route-paths";
import Recipe from "./components/Recipes/Recipe";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={CAKERECIPE} element={<Recipe />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
