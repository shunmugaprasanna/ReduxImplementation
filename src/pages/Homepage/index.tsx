import { useEffect} from "react";
import { useAppDispatch } from "../../app/hooks";
import {
  addToCart,
  productsAsync,
} from "../../features/products/productsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Loader from "../../Components/Loader";
import Cards from "../../Components/Cards";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { products, status, cart } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    // ACTION DISPATCH
    dispatch(productsAsync());
  }, []);

  const handleCart = (id: string) => {
    if (cart.length === 0) {
      console.log("Q1first");
      dispatch(addToCart([{ id: id, count: 1 }]));
    } else {
      let isNewItemFound = true;
      let finalArray = cart?.map((el: any) => {
        if (el.id === id) {
          isNewItemFound = false;
          return { id: el.id, count: el.count + 1 };
        } else {
          console.log("Q1three");
          return el;
        }
      });

      if (isNewItemFound) {
        finalArray.push({ id: id, count: 1 });
      }
      dispatch(addToCart(finalArray));
      console.log("finalArray", finalArray);
    }
  };

  return (
    <div className="flex flex-col w-full h-auto items-center justify-center">
      {status ? (
        <Loader />
      ) : (
        <div className="flex items-center justify-center flex-wrap gap-4">
          {products?.products?.map((el: any, index: number) => (
            <Cards
              key={index}
              title={el.title}
              brand={el.brand}
              price={el.price}
              image={el.thumbnail}
              productId={el?.id}
              handleCart={() => handleCart(el?.id)}
              onClick={() => navigate(`/product-detail/${el.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default HomePage;
