"use client";
import Image from "next/image";
import Link from "next/link";
import CircleLineSvg from "@/components/global/svg/CirclelineSvg";
import { useState } from "react";

const ErhvervserfaringCard = ({ erhvervserfaring}) => {
    const [hoveredLink, setHoveredLink] = useState(false);

  return (
    <Link href={`/multimediedesign/${erhvervserfaring.id}`}>
      <div className="hover:scale-105 transition-all duration-300 p-5 relative flex flex-col items-center" onMouseEnter={() => setHoveredLink(true)}
      onMouseLeave={() => setHoveredLink(false)}>
      <div className="flex items-end gap-1"
      >
        <h3 className="pink-secondary">{erhvervserfaring.titel}</h3>
        <h4 className="pink-secondary italic">{erhvervserfaring.periode}</h4>
      </div>
      <h4>{erhvervserfaring.arbejdsgiver}</h4>
      <Image className="mt-5 mb-5"  src={`/${erhvervserfaring.display_image}`} alt={`Billede af ${erhvervserfaring.titel}`} width={500} height={500}/>
      <p className="font-bold italic">{erhvervserfaring.stilling}</p>
      <p className="max-w-lg">{erhvervserfaring.beskrivelse_kort}</p>
      <CircleLineSvg isHovered={hoveredLink} />
      </div>
    </Link>
  );
};

export default ErhvervserfaringCard;
