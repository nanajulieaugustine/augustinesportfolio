import ListDotAndLine from "./ListDotAndLine";
import Niveau from "./Niveau";

const Sprog = ({ sprog }) => {
  return (
    <div className="flex items-center gap-5">
      <ListDotAndLine />
      <div className="flex flex-col">
        <h3 className="pink-secondary ml-2">{sprog.titel}</h3>
        <Niveau niveau={sprog.niveau} />
      </div>
    </div>
  );
};

export default Sprog;
