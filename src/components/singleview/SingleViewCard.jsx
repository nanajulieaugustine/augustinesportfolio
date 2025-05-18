"use client";
import Image from "next/image";
const SingleViewCard = ({ item }) => {
  return (
    <div>
      <div className="flex justify-end">
        <Image  src={`/${item.image}`} alt={`Billede af ${item.name}`} width={700} height={700}/>
      </div>
      <div className="relative -top-20">
        <h2>{item.titel}</h2>
        <div className="flex items-center">
          <h1>{item.name}</h1>
          <h4>{item.periode}</h4>
        </div>
        <article>
          <p>{item.beskrivelse_lang}</p>
        </article>
      </div>
      <article>
        <div className="flex items-end flex-col">
          <h2>Proces</h2>
          <p>{item.proces}</p>
        </div>
        <div>
          <h2>Udførelse</h2>
          <p>{item.udfoerelse}</p>
        </div>
      </article>
    </div>
  );
};

export default SingleViewCard;
