import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import HomePage from "../pages/Homepage";
import ProductDetail from "../pages/Product";
import Header from "../Components/Header";
import Cart from "../pages/Cart";

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <div className="flex w-full justify-center items-center">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-detail/:id/:isAdded" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
