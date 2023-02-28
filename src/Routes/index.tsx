import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import HomePage from "../pages/Homepage";
import ProductDetail from "../pages/Product";
import Header from "../Components/Header";

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <div className="flex w-full justify-center items-center">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
