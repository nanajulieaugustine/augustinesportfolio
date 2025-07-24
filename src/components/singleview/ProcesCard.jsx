import Image from "next/image";

const ProcesCard = ({ item }) => {
  return (
    <div className="flex gap-10">
        <div>
      <h2>{item.kategori}</h2>
      <h3>{item.titel}</h3>
    {item.beskrivelse.map((paragraf, index)=>(
        <p key={index} className="mb-4 max-w-lg">{paragraf}</p>
    ))  
    }
    </div>
    <div>
    {(item.billeder || []).map((billede, index) => (
        <div key={index} className="">
        <Image
            src={`/singleview/${billede}`}
            alt={`billeder tilhørende ${item.titel}`}
            width={300}
            height={300}
        />
        </div>
        ))}
    </div>
    </div>
  );
};

export default ProcesCard;
