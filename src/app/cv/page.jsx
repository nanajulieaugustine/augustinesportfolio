import Image from "next/image";
import Server from "@/components/global/Server";
import ServerOverview from "@/components/global/ServerOverview";
import ServerNiveau from "@/components/global/ServerNiveau";
import ServerUdgivelser from "@/components/global/ServerUdgivelser";
const Cv = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <Image
          className="relative left-20 -z-10"
          width={700}
          height={700}
          src={"/profile_rounded.webp"}
          alt={"picture of Nana Julie Augustine"}
        />
        <h1>Nana Julie Augustine</h1>
      </div>
      <section className="flex justify-between items-start">
        <p className="gray">
          10. december 2003 <br /> // 2300 København S
        </p>
        <p className="gray">nana.jensen.1012@gmail.com</p>
      </section>
      <section>
        <blockquote>
          “Jeg har været lærer for Nana på Filmskolen Blank og hun er en
          naturlig stærk fortæller og formidler, og har en meget dedikeret og
          høj arbejdsmoral. Dem, der får fornøjelsen af at opleve hende i sving
          kommer til at blive rigtig glad for at samarbejdet og det hun kan
          bidrage med.”
        </blockquote>
        <p className="gray">- Theis Mølstrøm Christensen</p>
      </section>
      <Server />
      <ServerOverview />
      <ServerNiveau />
      <ServerUdgivelser />
    </section>
  );
};

export default Cv;
