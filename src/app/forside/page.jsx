import Image from "next/image";
import DescBackground from "@/components/global/(index)/DescBackground";
import Link from "next/link";
import Titles from "@/components/global/(index)/Titles";

const Forside = () => {
  return (
    <div>
      <section className="flex justify-center items-center ml-20">
        <h1>Nana Julie Augustine</h1>
        <Image
          className="relative right-25 -z-10"
          width={700}
          height={700}
          src={"/profile_rounded.webp"}
          alt={"picture of Nana Julie Augustine"}
        />
      </section>
      <div className="overflow flex mt-10">
        <Titles></Titles>
      </div>
      <div className="flex justify-center gap-6">
        <Link href="/multimediedesign">
          <DescBackground>
            <h1 className="white">
              multi
              <br />
              medie
              <br />
              design
            </h1>
            <h2 className="white">
              FRONTEND // CONTENT CREATION // DIGITAL DESIGN // UX/UI
              DEVELOPMENT
            </h2>
          </DescBackground>
        </Link>
        <Link href="/kunst">
          <DescBackground>
            <h1 className="white">kunst</h1>
            <h2 className="white">
              DOKUMENTAR // FOTOGRAFERING // BILLEDKUNST // LITTERATUR{" "}
            </h2>
          </DescBackground>
        </Link>
      </div>
    </div>
  );
}

export default Forside;
