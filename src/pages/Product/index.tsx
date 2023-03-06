import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import {
  productsByIdAsync,
  addToCart,
} from "../../features/products/productsSlice";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import Loader from "../../Components/Loader";
import { AddtoCart } from "../../Assets/icons";

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const [index, setIndex] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const { id } = useParams();
  const { StatusById, productsById, cart } = useSelector(
    (state: RootState) => state.products
  );
  let isTheCardAdded = cart.some((item: any) => item.id == id) ? true : false;
  const handleAdded = () => {
    if (cart.length === 0) {
      dispatch(addToCart([{ id: id, count: 1 }]));
    } else {
      let isNewItemFound = true;
      let finalArray = cart?.map((el: any) => {
        if (el.id === id) {
          isNewItemFound = false;
          return el;
        } else {
          return el;
        }
      });
      if (!isTheCardAdded) {
        finalArray.push({ id: id, count: 1 });
      }
      dispatch(addToCart(finalArray));
    }
  };

  useEffect(() => {
    dispatch(productsByIdAsync(id));
  }, []);

  const addAndSubtract = (flag: any) => {
    if (flag == "Add") {
      setCount(count + 1);
    } else {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  };

  return (
    <>
      {StatusById ? (
        <Loader />
      ) : (
        <div className=" flex justify-center gap-8 h-[calc(100vh - 112px)] pt-[150px]">
          <div className="w-[600px] h-[660px] bg-[#F7F7F7] shadow-[0px_20px_35px_rgba(0,0,0,0.05)] rounded-[24px] py-8 px-12">
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
                <div className="py-6">
                  <button
                    onClick={handleAdded}
                    className={`w-[200px]  text-base font-medium flex justify-center gap-4
                                 py-1 rounded-2xl ${
                                   isTheCardAdded
                                     ? "bg-[#c9c6cb]"
                                     : "border-[#e6e2e2] border-[1px]"
                                 }`}
                  >
                    <AddtoCart />
                    {isTheCardAdded ? "Added" : "Add To Cart"}
                  </button>
                </div>
                <div className="py-3">
                  <button
                    onClick={() => addAndSubtract("Subract")}
                    className="w-10 border-[#e6e2e2] border-[1px]  text-lg font-medium rounded-tl-xl rounded-bl-xl"
                  >
                    -
                  </button>
                  <button className="w-10 border-[#e6e2e2] border-t-[1px] border-b-[1px] text-lg font-medium ">
                    {count}
                  </button>
                  <button
                    onClick={() => addAndSubtract("Add")}
                    className="w-10 border-[#e6e2e2] border-[1px] text-lg font-medium rounded-tr-xl rounded-br-xl"
                  >
                    +
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
