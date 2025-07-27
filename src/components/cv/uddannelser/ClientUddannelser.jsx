"use client";
import Uddannelser from "./Uddannelser";
import Kurser from "./Kurser";
import uddannelse from "@/backend/uddannelser.json"
import KlikPaaCirklen from "@/components/global/svg/KlikPaaCirklenSvg";

const ClientUddannelser = () => {
    const uddannelser = uddannelse[0].uddannelser;
    const kurser = uddannelse[0].kurser;

  return (
    <section>
      <KlikPaaCirklen/>
      <div>
        <h2 className="sticky flex justify-end mr-20">Uddannelse</h2>
        {uddannelser.map((uddannelse) => (
          <Uddannelser key={uddannelse.id} uddannelse={uddannelse} />
        ))}
      </div>
      <div>
        <h2 className="ml-20">Kurser</h2>
        {kurser.map((kursus) => (
          <Kurser key={kursus.id} kursus={kursus} />
        ))}
      </div>
    </section>
  );
};

export default ClientUddannelser;
