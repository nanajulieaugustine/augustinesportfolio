const ListDotAndLine = ({ onClick, className }) => {
  return (
    <div
      className="relative flex justify-center items-center"
      onClick={onClick}
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-55 bg-(--white-primary) -z-1"></div>
      <div
        className={`w-5 h-5 rounded-full border-2 border-(--white-primary) bg-(--white-primary) z-1 cursor-pointer hover:scale-115 transition-all duration-300 ${className}`}
      ></div>
    </div>
  );
};

export default ListDotAndLine;
