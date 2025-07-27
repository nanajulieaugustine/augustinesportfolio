const DescBackground = ({ children }) => {
  return (
    <section className="bg-(--pink-accent) rounded-4xl p-5 flex flex-col gap-4 max-w-115 min-h-150 hover:scale-105 tranistion-all duration-300">
      {children}
    </section>
  );
};

export default DescBackground;
