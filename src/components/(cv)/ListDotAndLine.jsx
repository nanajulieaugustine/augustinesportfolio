const ListDotAndLine = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-42 bg-(--white-primary)"></div>
      <div className="w-5 h-5 rounded-full border-2 border-(--white-primary) bg-(--white-primary) z-1"></div>
    </div>
  );
};

export default ListDotAndLine;
