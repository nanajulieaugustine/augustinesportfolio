"use client";
import Kompetencer from "./Kompetencer";
import Sprog from "./Sprog";
import Faerdigheder from "./Faeridgheder";
import niveau from "@/backend/niveau.json"

const ClientNiveau = () => {
  const kompetencer = niveau[0].kompetencer;
  const faerdigheder = niveau[0].faerdigheder;
  const sprog = niveau[0].sprog;

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
      <div className="flex flex-col items-end gap-5">
        <h2 className="mr-10">Færdigheder</h2>
        {faerdigheder.map((faerdighed) => (
          <Faerdigheder key={faerdighed.id} faerdighed={faerdighed} />
        ))}
      </div>
    </section>
  );
};

export default ClientNiveau;
