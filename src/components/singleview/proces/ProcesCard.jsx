import RoundedKarrusel from "./RoundedKarrusel";

const ProcesCard = ({ item }) => {
  return (
    <article className="flex flex-col gap-5">
      <div>
        <div className="flex items-end gap-2">
      <h1 className="italic">{item.kategori}</h1>
      <h3 className="pb-5">{item.titel}</h3>
        </div>
    {item.beskrivelse.map((paragraf, index)=>(
        <p key={index} className="mb-4 max-w-xl">{paragraf}</p>
    ))  
    }
      </div>
    <RoundedKarrusel item={item}/>
    </article>
  );
};

export default ProcesCard;
