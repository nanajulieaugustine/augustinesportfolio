import Image from "next/image";
import LineAnimationInView from "@/components/global/svg/LineAnimation";
import ErhvervserfaringClient from "@/components/cv/erhvervserfaring/ErhvervserfaringClient";
import ClientNiveau from "@/components/cv/niveau/ClientNiveau";
import ClientUdgivelser from "@/components/cv/udgivelser/ClientUdgivelser";
import ClientUddannelser from "@/components/cv/uddannelser/ClientUddannelser";

const Cv = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
             <LineAnimationInView/>
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
          kommer til at blive rigtig glad for samarbejdet og det hun kan
          bidrage med.”
        </blockquote>
        <p className="gray">- Theis Mølstrøm Christensen</p>
      </section>
      <ClientUddannelser/>
      <ErhvervserfaringClient/>
      <ClientNiveau/>
      <ClientUdgivelser/>
    </section>
  );
};

export default Cv;
