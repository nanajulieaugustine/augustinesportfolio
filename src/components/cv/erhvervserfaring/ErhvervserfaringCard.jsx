"use client";
import Image from "next/image";

const ErhvervserfaringCard = ({ erhvervserfaring, activeCategory, activeGenre}) => {

  return (
    <div className="flex flex-col items-center px-4">
      <div className="flex items-end gap-1">
        <h3 className="pink-secondary">{erhvervserfaring.titel}</h3>
        <h4 className="pink-secondary italic">{erhvervserfaring.periode}</h4>
      </div>
      <h4>{erhvervserfaring.arbejdsgiver}</h4>
      <Image className="rounded-full mt-5 mb-10"  src={`/${erhvervserfaring.display_image}`} alt={`Billede af ${erhvervserfaring.titel}`} width={400} height={400}/>
      <p className="font-bold italic">{erhvervserfaring.stilling}</p>
      <p>{erhvervserfaring.beskrivelse_kort}</p>
    </div>
  );
};

export default ErhvervserfaringCard;
