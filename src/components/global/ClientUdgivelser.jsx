"use client";
import Udgivelser from "../(cv)/Udgivelser";

const ClientUdgivelser = ({ udgivelser }) => {
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
