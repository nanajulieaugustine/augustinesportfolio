"use client";
import Uddannelser from "../(cv)/Uddannelser";
import Kurser from "../(cv)/Kurser";

const Client = ({ uddannelser, kurser }) => {
  return (
    <section>
      <div>
        <h2 className="flex justify-end mr-20">Uddannelse</h2>
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

export default Client;
