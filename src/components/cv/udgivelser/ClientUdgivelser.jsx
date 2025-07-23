"use client";
import Udgivelser from "./Udgivelser";
import udgivelser from "@/backend/udgivelser.json";

const ClientUdgivelser = () => {

  return (
    <section>
      <div className="flex flex-col items-center gap-5">
        <h2 className="mr-10">Udgivelser</h2>
        {udgivelser.map((udgivelse) => (
          <Udgivelser key={udgivelse.id} udgivelse={udgivelse} />
        ))}
      </div>
    </section>
  );
};

export default ClientUdgivelser;
