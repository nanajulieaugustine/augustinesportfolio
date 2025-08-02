import { BsArrowLeftCircle } from "react-icons/bs";

const GoBackArrow = () => {
  const goBack = () => {
    history.back(); 
  };

  return (
    <button aria-label="Gå tilbage" className="cursor-pointer white pl-5 pb-5 hover:scale-105 transition-all duration-300" onClick={goBack}>
      <BsArrowLeftCircle size={50} />
    </button>
  );
};

export default GoBackArrow;