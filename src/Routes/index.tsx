import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import HomePage from "../pages/Homepage";
import ProductDetail from "../pages/Product";
import Header from "../Components/Header";
import Cart from "../pages/Cart";

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <div className="flex w-full justify-center items-center px-8 top-0 fixed bg-white ">
        <Header />
      </div>
      <div className="w-full !h-screen ">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/product-detail/:id/:isAdded"
          element={<ProductDetail />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
