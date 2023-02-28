import { AddedBag, AddtoCart } from "../../Assets/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

type CardsType = {
  title: string;
  brand: string;
  image: string;
  className?: string;
  price: string;
  onClick: () => void;
  handleCart: () => void;
  productId?: any;
  // rating:string;
};
const Cards = ({
  title,
  brand,
  image,
  price,
  onClick,
  handleCart,
  className,
  productId,
}: CardsType) => {
  const { StatusById, productsById, cart } = useSelector(
    (state: RootState) => state.products
  );

  const checkbyId = (id: number) => {
    console.log("Q1", id);

    let isTheCardAdded = cart.some((item: any) => item.id == id) ? true : false;

    console.log("some", isTheCardAdded);

    return isTheCardAdded;
  };

  console.log("productsById", cart);
  return (
    <div
      className={`${className} flex flex-col gap-4 justify-between p-4 items-center bg-[rgba(137,137,137,0.13)] w-[280px]
      rounded-3xl  border-stone-50 border text-base font-medium`}
    >
      <img
        className="w-full max-h-32 rounded-2xl mt-2"
        src={image}
        alt="ProductImage"
      />
      <p>Brand : {brand}</p>
      <p> {title}</p>
      <span>Price : {price}</span>
      <button className=" w-full bg-[#c9c6cb] rounded-3xl  " onClick={onClick}>
        View
      </button>

      {checkbyId(productId) ? (
        <button
          onClick={handleCart}
          className=" w-full  bg-[#c9c6cb] text-lg font-medium flex justify-center gap-4 py-1 rounded-2xl"
        >
          <AddedBag />
          Added
        </button>
      ) : (
        <button
          onClick={handleCart}
          className=" w-full  border-[#e6e2e2] border-[1px] text-lg font-medium flex justify-center gap-4 
          py-1 rounded-2xl"
        >
          <AddtoCart />
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Cards;
