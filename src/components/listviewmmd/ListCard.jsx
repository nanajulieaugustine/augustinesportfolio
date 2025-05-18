import Link from "next/link";
import Image from "next/image";

const ListCard = ({ item }) => {

  return (
    <div className="hover:scale-105 transition-all duration-300">
      <Link href={`/multimediedesign/${item.id}`}>
        <Image  src={`/${item.image}`} alt={`Billede af ${item.name}`} width={300} height={300}/>
        <div className="flex items-end gap-2">
          <h3 className="pink-secondary">{item.name}</h3>
          <h4 className="italic">{item.type}</h4>
        </div>
        <p className="max-w-100">{item.beskrivelse_ord}</p>
      </Link>
    </div>
  );
};

export default ListCard;