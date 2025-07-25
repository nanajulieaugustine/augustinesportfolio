import RoundedKarrusel from "./RoundedKarrusel";

const ProcesCard = ({ item }) => {
  return (
    <article className="flex flex-col gap-5">
      <div>
      <h2>{item.kategori}</h2>
      <h3>{item.titel}</h3>
    {item.beskrivelse.map((paragraf, index)=>(
        <p key={index} className="mb-4">{paragraf}</p>
    ))  
    }
      </div>
    <RoundedKarrusel item={item}/>
    </article>
  );
};

export default ProcesCard;
