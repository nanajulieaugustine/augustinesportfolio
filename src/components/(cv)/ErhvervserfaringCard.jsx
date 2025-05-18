"use client";
import Image from "next/image";

const ErhvervserfaringCard = ({ overview }) => {

  return (
    <div className="flex flex-col items-center px-4">
      <div className="flex items-end gap-1">
        <h3 className="pink-secondary">{overview.titel}</h3>
        <h4 className="pink-secondary italic">{overview.periode}</h4>
      </div>
      <h4>{overview.arbejdsgiver}</h4>
      <Image className="rounded-full mt-5 mb-10"  src={`/${overview.image}`} alt={`Billede af ${overview.name}`} width={400} height={400}/>
      <p>{overview.beskrivelse_kort}</p>
    </div>
  );
};

export default ErhvervserfaringCard;
