import WishlistCards from "../../Components/WishlistCard";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Loader from "../../Components/Loader";

const Cart = () => {
  const { status, cart } = useSelector((state: RootState) => state.products);

  console.log("Q1cvb", cart);

  return (
    <div>
      {status ? (
        <Loader />
      ) : (
        <div className="flex flex-col  justify-center flex-wrap gap-4">
          {cart?.map((el: any) => (
            <WishlistCards product={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
