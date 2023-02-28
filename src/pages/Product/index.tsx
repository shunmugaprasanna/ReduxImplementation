import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { productsByIdAsync } from "../../features/products/productsSlice";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import Loader from "../../Components/Loader";
import { AddtoCart } from "../../Assets/icons";

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const [index, setIndex] = useState<number>(0);
  const { id } = useParams();
  // console.log(param,"aa");
  const { StatusById, productsById , cart } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(productsByIdAsync(id));
  }, []);
  console.log(productsById, "");

  return (
    <>
      {StatusById ? (
        <Loader />
      ) : (
        <div className="pt-[80px] flex justify-center gap-8">
          <div className="w-[600px] h-[660px] bg-[#F7F7F7] rounded-[24px] py-8 px-12">
            <img
              className=" rounded-2xl mt-2 max-h-96"
              src={productsById?.images?.[index]}
              alt="ProductImage"
            />
            <div className="flex justify-around py-8">
              {productsById?.images?.map((images: any, index: any) => (
                <img
                  className="w-20 h-20  rounded-2xl mt-2"
                  src={images}
                  alt="ProductImages"
                  onClick={() => setIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 jus">
            <p className="text-2xl font-medium text-[#000000] w-[612px]">
              <span className="text-2xl"> Product : </span>
              {productsById?.title}
            </p>
            <p className="text-xl font-medium text-[#000000] w-[612px]">
              <span className="text-2xl"> Description : </span>
              {productsById?.description}
            </p>
            <p className="text-xl font-medium text-[#000000] w-[612px]">
              <span className="text-2xl"> price : </span>
              {productsById?.price}
            </p>
            <p className="text-xl font-medium text-[#000000] w-[612px]">
              <span className="text-2xl"> Rating : </span>
              {productsById?.rating}
            </p>
            <div className="flex flex-col">
              <div>
                <button className="w-10 border-[#e6e2e2] border-[1px]  text-lg font-medium rounded-tl-xl rounded-bl-xl">
                  -
                </button>
                <button className="w-10 border-[#e6e2e2] border-t-[1px] border-b-[1px] text-lg font-medium ">
                  0
                </button>
                <button className="w-10 border-[#e6e2e2] border-[1px] text-lg font-medium rounded-tr-xl rounded-br-xl">
                  +
                </button>
                <div className="py-6">
                  <button
                    className=" w-[200px] border-[#e6e2e2] border-[1px] text-lg font-medium flex justify-center gap-4 
                  py-1 rounded-2xl"
                  >
                    <AddtoCart />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
