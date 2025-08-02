"use client";
import HeroCard from "./HeroCard";
import Billeder from "./Billeder";
import ProcesScroll from "./proces/ProcesScroll";
import SlidingImages from "./proces/SlidingImages";
import RoterendeKandeSvg from "../global/svg/RoterendeKandeSvg";
import FadeInAnimation from "../global/animationer/FadeInAnimation";
import GoBackArrow from "../global/GoBackArrow";

const SingleViewCard = ({ item, portfolioId }) => {
  return (
    <FadeInAnimation>
      <GoBackArrow/>
          <HeroCard item={item} />
      <div>
        {item.billeder && <Billeder item={item} />}
        
        <article className="relative">
          <div className="h-[200vh] relative">
            <RoterendeKandeSvg />
            <div className="sticky top-20">
              <h2>Proces</h2>
              {item.proces.map((paragraf, index) => (
                <p key={index} className="mb-4 max-w-lg">{paragraf}</p>
              ))}
            </div>
            <SlidingImages item={item} />
          </div>
        </article>

        <div className="relative">
          <ProcesScroll portfolioId={portfolioId} />
        </div>
      </div>
    </FadeInAnimation>
  );
};

export default SingleViewCard;
