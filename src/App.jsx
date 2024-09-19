import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import BestSeller from "./pages/BestSeller";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth">
          <Route index element={<Auth />} />
          <Route path="signup" index element={<SignUp />} />
          <Route path="signin" index element={<SignIn />} />
        </Route>

        <Route element={<Dashboard />}>
          <Route path="/" index element={<Home />} />
          <Route path="/bestseller" element={<BestSeller />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
