type WishlistCardType = {
  product?: any;
};

const WishlistCards = ({ product  }: WishlistCardType) => {
  return (
    <div className="px-16">
      <div
        className="h-[344px]  bg-[#FFFFFF] rounded-[20px] shadow-[0px_20px_35px_rgba(0,0,0,0.05)] flex
       px-10 gap-12  items-center justify-between"
      >
        <div className="max-h-[200px]  bg-slate-400 rounded-2xl">
          {" "}
          <img
            className="w-full max-h-[200px]"
            src={product.thumbnail}
            alt="WishlistCardImage"
          />
        </div>
        <div className=" flex flex-col gap-2 text-xl font-semibold">
          <p>Brand : {product.brand}</p>
          <p>Title : {product.title}</p>
          <span>Price : {product.price}</span>
          <span>{product.price * product.count}</span>
          {/* <div className="py-3">
            <button className="w-10 border-[#e6e2e2] border-[1px]  text-lg font-medium rounded-tl-xl rounded-bl-xl">
              -
            </button>
            <button className="w-10 border-[#e6e2e2] border-t-[1px] border-b-[1px] text-lg font-medium ">
              0
            </button>
            <button className="w-10 border-[#e6e2e2] border-[1px] text-lg font-medium rounded-tr-xl rounded-br-xl">
              +
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WishlistCards;
