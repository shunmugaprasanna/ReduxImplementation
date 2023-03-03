import { AddedBag, AddtoCart } from "../../Assets/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";

type CardsType = {
  title: string;
  brand: string;
  image: string;
  className?: string;
  price: string;
  handleCart: () => void;
  productId?: any;
};
const Cards = ({
  title,
  brand,
  image,
  price,
  handleCart,
  className,
  productId,
}: CardsType) => {
  const { cart } = useSelector((state: RootState) => state.products);
  const navigate = useNavigate();

  const checkbyId = (id: number) => {
    let isTheCardAdded = cart.some((item: any) => item.id == id) ? true : false;

    return isTheCardAdded;
  };

  return (
    <div
      className={`${className} flex flex-col gap-4 justify-between p-4  bg-[rgba(137,137,137,0.13)] w-[280px]
      rounded-3xl  border-stone-50 border text-base font-medium bg-[#FFFFFF]  shadow-[0px_20px_35px_rgba(0,0,0,0.05)]`}
    >
      <img
        className="w-full max-h-32 rounded-2xl mt-2"
        src={image}
        alt="ProductImage"
      />
      <div className="pl-3">
        <p>Brand : {brand}</p>
        <p> {title}</p>
        <span>Price : {price}</span>
      </div>

      {checkbyId(productId) ? (
        <button
          onClick={handleCart}
          className=" w-full  bg-[#c9c6cb] text-base font-medium flex justify-center gap-4 py-1 rounded-2xl"
        >
          <AddedBag />
          Added
        </button>
      ) : (
        <button
          onClick={handleCart}
          className=" w-[170px]  border-[#e6e2e2] border-[1px] text-base font-medium flex justify-center gap-4 
          py-1 rounded-2xl"
        >
          <AddtoCart />
          Add To Cart
        </button>
      )}

      <button
        className=" w-full bg-[#c9c6cb] rounded-3xl  "
        onClick={() =>
          navigate(`/product-detail/${productId}/${checkbyId(productId)}`)
        }
      >
        View
      </button>
    </div>
  );
};

export default Cards;
