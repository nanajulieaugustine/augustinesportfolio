import Niveau from "./Niveau";
import ListDotAndLine from "../ListDotAndLine";

const Kompetencer = ({ kompetence }) => {
  return (
    <div className="flex items-center gap-5 relative">
      <div className="flex flex-col items-end">
        <h3 className="pink-secondary mr-2">{kompetence.titel}</h3>
        <Niveau niveau={kompetence.niveau} />
      </div>
      <ListDotAndLine />
    </div>
  );
};

export default Kompetencer;
