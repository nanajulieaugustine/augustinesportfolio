import Image from "next/image";
import StaggeredFade from "../global/animationer/StaggeredFade";
const FirstArtcle = () => {
  return (
    <section>
      <article className="px-(--article-width)">
        <StaggeredFade text={"en fortælling om mig"}/>
        <p className="gray">
          Jeg har altid brugt kunsten til at udtrykke mig. Jeg eksperimenterer
          med forskellige kunstarter på tværs af medier - både kommercielt og
          værker kun for mig selv.
        </p>
        <Image
          className="mb-15"
          width={1000}
          height={1000}
          alt={"billede af augustines ben gennem et hul"}
          src={"/omphoto.webp"}
        />
        <h2>kunst i barndommen</h2>
        <blockquote>
          “Jeg kommer ikke fra en højkulturel kunstfamilie”
        </blockquote>
        <p>
          ...dog har kunst altid fyldt en stor del af mit liv. Som barn,
          begyndte jeg at udtrykke mine følelser gennem tegninger. Når jeg ikke
          kunne formulere mine følelser med ord, viste jeg det gennem
          farveblyanter og papir.
        </p>
        <p>
          Senere i min barndom, begyndte jeg at blive overrumplet af min
          fantasi. Jeg voksede op i en lille landsby på midt- og vestsjælland,
          hvor jeg efterhånden lærte alle gader og vejnavne at kende efter jeg
          tog mit løbehjul over skulderen og flygtede hen i et andet univers.
          Jeg begyndte at lave historier, som jeg ville skrive ned.
        </p>
        <h2>skabertrang</h2>
        <p>
          Som jeg skrev mine små historier og begyndte at udfolde min krativitet
          med forskellig håndarbejde, kunne jeg mærke min store trang til at
          fortælle historier, men også til at udtrykke mig - med og uden ord.
          Dette begyndte at komme til udtryk gennem filmmediet, hvor jeg så
          uendelige af muligheder til at kombinere forskellige kunstformer.
        </p>
      </article>
    </section>
  );
};

export default FirstArtcle;
