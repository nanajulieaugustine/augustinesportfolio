"use client";
import Image from "next/image";
import ProcesScroll from "./proces/ProcesScroll";
import Link from "next/link";
import HorizontalScroll from "../global/animationer/HorizontalScroll";
import LineAnimationInView from "../global/svg/LineAnimation";
import SlidingImages from "./proces/SlidingImages";
import RoterendeKandeSvg from "../global/svg/RoterendeKandeSvg";

const SingleViewCard = ({ item }) => {


  return (
    <div>
      <HorizontalScroll className="flex justify-end">
        <LineAnimationInView/>
        <Image  src={`/${item.display_image}`} alt={`Billede af ${item.titel}`} width={700} height={700}/>
      </HorizontalScroll>
      <div className="relative -top-20">
        <h2>{item.kategori}</h2>
        <div className="flex items-baseline">
          <h1>{item.titel}</h1>
          <h4>{item.periode}</h4>
        </div>
        <div>
        </div>
          <h2 className="white italic">{item.beskrivelse_lang}</h2>
          <hr className="white m-5"/>
          {item.link?(
            <Link href={`${item.link}`} target="_blank">
              <h3 className="hover:scale-103 transition-all duration-300 cursor-pointer">{`Gå til ${item.titel}`}</h3>
            </Link>
          ):""}
        </div>
      <article>
          <div className="relative">
            <div className="h-[200vh] relative">
              <RoterendeKandeSvg/>
              {/* Sticky Proces */}
              <div className="sticky top-20">
                <h2>Proces</h2>
                {item.proces.map((paragraf, index) => (
                  <p key={index} className="mb-4 max-w-lg">{paragraf}</p>
                ))}
              </div>

              {/* Sliding Images bagved */}
              <SlidingImages item={item} />
            </div>
          </div>
        </article>
        <div className="relative">
          <ProcesScroll/>
          </div>
    </div>
  );
};

export default SingleViewCard;
