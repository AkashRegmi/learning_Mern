import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Products from "./pages/Products";
import OrderTable from "./components/OrderTable";
import HomeLayout from "./layout/HomeLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      {/* HomeLayout will wrap Home and Products pages */}
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<OrderTable />} />
      </Route>

      {/* Standalone routes */}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />

      {/* Fallback for any unknown routes */}
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
    </QueryClientProvider>
  
    </>
  
  );
}

export default App;
