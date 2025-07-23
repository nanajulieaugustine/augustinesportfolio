import Niveau from "./Niveau";
import ListDotAndLine from "../ListDotAndLine";

const Faerdigheder = ({ faerdighed }) => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col items-end">
        <h3 className="pink-secondary mr-2">{faerdighed.titel}</h3>
        <Niveau niveau={faerdighed.niveau} />
      </div>
      <ListDotAndLine />
    </div>
  );
};

export default Faerdigheder;
