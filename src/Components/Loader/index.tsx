const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-current   rounded-full";
  return (
    <div className="absolute top-[50%] w-full  flex items-center justify-center z-30">
      <div className="flex">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>{" "}
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>{" "}
        <div className={`${circleCommonClasses} animate-bounce400`}></div>{" "}
      </div>
    </div>
  );
};
export default Loader;
