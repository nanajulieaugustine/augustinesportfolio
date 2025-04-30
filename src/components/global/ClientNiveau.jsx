"use client";
import Kompetencer from "../(cv)/Kompetencer";
import Sprog from "../(cv)/Sprog";

const ClientNiveau = ({ sprog, kompetencer }) => {
  return (
    <section>
      <div className="flex flex-col items-end gap-5">
        <h2 className="mr-10">Kompetencer</h2>
        {kompetencer.map((kompetence) => (
          <Kompetencer key={kompetence.id} kompetence={kompetence} />
        ))}
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <h2 className="ml-10">Sprog</h2>
        {sprog.map((sprog) => (
          <Sprog key={sprog.id} sprog={sprog} />
        ))}
      </div>
    </section>
  );
};

export default ClientNiveau;
