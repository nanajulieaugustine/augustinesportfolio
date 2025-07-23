"use client";
import Image from "next/image";
import ProcesScroll from "./ProcesScroll";

const SingleViewCard = ({ item }) => {
  return (
    <div>
      <div className="flex justify-end">
        <Image  src={`/${item.display_image}`} alt={`Billede af ${item.titel}`} width={700} height={700}/>
      </div>
      <div className="relative -top-20">
        <h2>{item.kategori}</h2>
        <div className="flex items-baseline">
          <h1>{item.titel}</h1>
          <h4>{item.periode}</h4>
        </div>
        <div>
          <p className="max-w-2xl">{item.beskrivelse_lang}</p>
        </div>
      </div>
      <article>
        <div className="flex items-end flex-col">
          <h2>Proces</h2>
          {item.proces.map((paragraf, index) => (
          <p key={index} className="mb-4">{paragraf}</p>
        ))}
        </div>
        <ProcesScroll/>
      </article>
    </div>
  );
};

export default SingleViewCard;
