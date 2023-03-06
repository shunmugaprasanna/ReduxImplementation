import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Loader from "../../Components/Loader";
import Cards from "../../Components/Cards";
import {
  addToCart,
  productsAsync,
} from "../../features/products/productsSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { products, status, cart } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    // ACTION DISPATCH
    dispatch(productsAsync());
  }, []);

  const handleCart = (productDetails: any) => {
    if (cart.length === 0) {
      dispatch(
        addToCart([
          {
            id: productDetails.id,
            count: 1,
            price: productDetails.price,
            title: productDetails.title,
            thumbnail: productDetails.thumbnail,
          },
        ])
      );
    } else {
      let isNewItemFound = true;

      let finalArray = cart?.map((el: any) => {
        if (el.id === productDetails.id) {
          isNewItemFound = false;
          return {
            id: el.id,
            count: el.count + 1,
            price: el.price,
            title: el.title,
            thumbnail: el.thumbnail,
          };
        } else {
          return el;
        }
      });

      if (isNewItemFound) {
        finalArray.push({
          id: productDetails.id,
          count: 1,
          price: productDetails.price,
          title: productDetails.title,
          thumbnail: productDetails.thumbnail,
        });
      }
      dispatch(addToCart(finalArray));
    }
    console.log("first22", productDetails, cart);
  };

  return (
    <div className="flex flex-col w-full h-auto items-center justify-center pt-28">
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
              handleCart={() => handleCart(el)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default HomePage;
