import { AddCart, EmptyCart, User, Wishlist } from "../../Assets/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  const { cart } = useSelector((state: RootState) => state.products);
  const navigate = useNavigate();
  console.log(cart, "Hcart");

  return (
    <div className="flex w-full items-center justify-between gap-96 px-8 py-8">
      <h2 className="text-2xl font-bold" onClick={() => navigate('/')} >Jp's E-Commerce</h2>
      <div className="flex gap-5">
        <button className="w-[48px] h-[48px] rounded-full bg-[#F2F3F5] flex justify-center items-center ">
          <User />
        </button>
        <button className="w-[48px] h-[48px] rounded-full bg-[#F2F3F5] flex justify-center items-center">
          <Wishlist />
        </button>
        <button
          onClick={() => navigate(`/cart`)}
          className={`w-[48px] h-[48px] rounded-full bg-[#F2F3F5] flex justify-center items-center relative`}
        >
          {cart.length > 0 ? (
            <>
              <AddCart />
              <span
                className="h-5 w-5 bg-black rounded-[50%] top-[-5px] absolute left-[31px]
           flex justify-center items-center text-white text-xs font-medium"
              >
                {cart.length}
              </span>
            </>
          ) : (
            <EmptyCart />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
