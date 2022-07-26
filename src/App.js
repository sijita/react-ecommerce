import { Routes, Route } from "react-router-dom";
import AllProducts from "./screens/AllProducts";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/allproducts" element={<AllProducts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
