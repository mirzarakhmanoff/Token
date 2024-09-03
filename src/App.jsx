import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Login from "./components/Login";
import Auth from "./components/auth/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/" element={<Home />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
