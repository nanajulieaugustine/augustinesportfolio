"use client";
import ProcesScroll from "./proces/ProcesScroll";
import SlidingImages from "./proces/SlidingImages";
import RoterendeKandeSvg from "../global/svg/RoterendeKandeSvg";
import Billeder from "./Billeder";
import HeroCard from "./HeroCard";

const SingleViewCard = ({ item, portfolioId }) => {


  return (
    <div>
      <HeroCard item={item}/>
        {item.billeder?(
        <Billeder item={item}/>
        ):""}
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
          <ProcesScroll portfolioId={portfolioId}/>
          </div>
    </div>
  );
};

export default SingleViewCard;
