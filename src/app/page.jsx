import Image from "next/image";
import DescBackground from "@/components/global/(index)/DescBackground";
import Link from "next/link";
import Titles from "@/components/global/(index)/Titles";
export default function Home() {
  return (
    <section>
      <div className="flex justify-center items-center ml-20">
        <h1>Nana Julie Augustine</h1>
        <Image
          className="relative right-25 -z-10"
          width={700}
          height={700}
          src={"/profile_rounded.webp"}
          alt={"picture of Nana Julie Augustine"}
        />
      </div>
      <div>
        <Titles></Titles>
      </div>
      <section className="flex justify-center gap-6">
        <Link href="/multimediedesign">
          <DescBackground>
            <h4>
              multi
              <br />
              medie
              <br />
              design
            </h4>
            <h5>
              FRONTEND // CONTENT CREATION // DIGITAL DESIGN // UX/UI
              DEVELOPMENT
            </h5>
          </DescBackground>
        </Link>
        <Link href="/kunst">
          <DescBackground>
            <h4>kunst</h4>
            <h5>DOKUMENTAR // FOTOGRAFERING // BILLEDKUNST // LITTERATUR </h5>
          </DescBackground>
        </Link>
      </section>
    </section>
  );
}
