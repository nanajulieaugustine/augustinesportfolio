import Image from "next/image";

const SecondArticle = () => {
  return (
    <section>
      <article className="px-(--article-width)">
        <h2>arbejdsmorale</h2>
        <h3>filmskolen blank</h3>
        <p>
          I forbindelse med mine kreative visioner, begyndte jeg på Filmskolen
          Blank, hvor jeg lærte at udtrykke mig kunstnerisk. Selvom jeg gik ind
          i forløbet med min store fantasi og passion for fiktion, endte jeg med
          at sætte meget mere pris på dokumentargenren. I dette læringsforløb,
          mærkede jeg hvordan min arbejdsmorale og form for initiativ for alvor
          trådte i kraft. Jeg arbejdede intensivt med mine filmprojekter, men
          også selve koordinering på den nyopstartede filmskole.
        </p>
        <h3>Bellevue Teatret</h3>
        <p>
          Denne stærke drivkraft, har jeg taget med i mange andre roller. I
          februar 2024, blev jeg ansat i foyerteamet på Bellevue Teatret, og
          allerede efter seks måneder, blev tilbudt en stilling som
          foyeransvarlig, der trådte i kraft i 2025. Under denne stilling,
          beskæftiger jeg mig med ledelse og fordeling af ansatte samt afvikling
          og kommunikation med forestillingsleder og bagscenen.
        </p>
        <Image
          className="m-auto flex justify-center"
          width={600}
          height={600}
          alt={"artikel af nordvestnyt"}
          src={"/artikel.webp"}
        />
        <p className="gray flex justify-center px-25 mt-2">
          Artikel i Nordvestnyt om min debutdokumentar Tabte År (2023), skrevet
          af Palle Mogensen.
        </p>
        <h2 className="mt-10">FORMIDLING OG MARKETING</h2>
        <p>
          I forbindelse med min sans for kreativ formidling blandt forskellige
          kunstarter, begyndte jeg at eksperimentere med grafisk og digital
          design.
        </p>
        <h3>Multimediedesign og frontend</h3>
        <p>
          Som et fritidsprojekt, begyndte jeg at udvikle Filmskolen Blanks
          hjemmeside gennem Wix.com. Jeg endte med at fordybe mig meget i denne
          form for kreativitet - og dette var anledningen af min ansøgning til
          Københavns Erhvervsakademis multimediedesignuddannelse. Jeg fik
          herigennem en stor læring indenfor designprincipper, men oplevede også
          at jeg fandt den udfordrende del af uddannelsen mere tilfredsstillende
          - nemlig frontend programmering.
        </p>
        <p>
          I den lange arbejdsproces der er i at skabe digitale løsninger,
          begyndte jeg at elske at se mine projekter komme til livs når sitet
          blev kodet - især når noget gik galt, og jeg sad i flere timer og
          debuggede en fejlkode, oplevede jeg en stor drivkraft for at lære mere
          og fordybe mig i mit fag.
        </p>
        <Image
          className="m-auto flex justify-center mb-15"
          width={400}
          height={400}
          alt={"opslag af Augustine på trappetrin117 instagram"}
          src={"/trappetrinopslag.webp"}
        />
        <h3>Marketing og brandidentitet</h3>
        <p>
          Men det er ikke bare programmeringskundskaber, min uddannelse har lært
          mig. Det er også sansen for at videreudvikle min kreativitet til
          markedsdøring og brandidentitet for virksomheder. Selvom mange nok vil
          mene, at marketing dræber den eksperimentelle kreativitet, ser jeg det
          som en måde at hjælpe virksomheder med at formidle deres budskab på
          samme måde som klassisk kunst gør det.
        </p>
      </article>
    </section>
  );
};

export default SecondArticle;
