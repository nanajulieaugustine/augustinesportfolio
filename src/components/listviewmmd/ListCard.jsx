import Link from "next/link";
import Image from "next/image";

const ListCard = ({ item }) => {

  return (
    <div className="hover:scale-105 transition-all duration-300 p-5">
      <Link href={`/multimediedesign/${item.id}`}>
        <Image  src={`/${item.display_image}`} alt={`Billede af ${item.titel}`} width={500} height={500}/>
        <div className="flex items-end gap-2">
          <h3 className="pink-secondary">{item.titel}</h3>
          <h4 className="italic">{item.type}</h4>
        </div>
        <p className="max-w-100">{item.beskrivelse_ord}</p>
      </Link>
    </div>
  );
};

export default ListCard;