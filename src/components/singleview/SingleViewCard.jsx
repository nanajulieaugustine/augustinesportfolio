"use client";
import Image from "next/image";
import ProcesScroll from "./ProcesScroll";
import Link from "next/link";
import HorizontalScroll from "../global/HorizontalScroll";
import LineAnimationInView from "../global/LineAnimation";
import SlidingImages from "./SlidingImages";

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
          <p className="max-w-2xl">{item.beskrivelse_lang}</p>
          {item.link?(
            <Link href={`${item.link}`} target="_blank">
              <h3 className="hover:scale-103 transition-all duration-300 cursor-pointer">{`Gå til ${item.titel}`}</h3>
            </Link>
          ):""}
        </div>
      <article>
          <div className="relative">
            <div className="h-[200vh] relative">
              {/* Sticky Proces */}
              <div className="sticky top-20">
                <h2>Proces</h2>
                {item.proces.map((paragraf, index) => (
                  <p key={index} className="mb-4">{paragraf}</p>
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
