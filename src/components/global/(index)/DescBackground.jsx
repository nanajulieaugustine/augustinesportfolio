const DescBackground = ({ children }) => {
  return (
    <div className="bg-(--pink-accent) rounded-4xl p-5 flex flex-col gap-4 max-w-115 min-h-150 hover:scale-105 hover:tranistion-all hover:duration-300">
      {children}
    </div>
  );
};

export default DescBackground;
