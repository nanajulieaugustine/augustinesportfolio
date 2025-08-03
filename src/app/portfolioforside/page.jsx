"use client";
import { useEffect } from "react";
import FadeInAnimation from "@/components/global/animationer/FadeInAnimation";
import StaggeredFade from "@/components/global/animationer/StaggeredFade";
import ChosenList from "@/components/global/(index)/ChosenList";
import LineAnimationInView from "@/components/global/svg/LineAnimation";
import DisplayTekst from "@/components/global/animationer/DisplayText";

const Forside = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = "";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <FadeInAnimation>
      <section className="flex justify-center ml-20 sticky">
        <LineAnimationInView />
        <StaggeredFade text="Portfolio" />
      </section>
      <div className="flex items-center flex-col">
        <DisplayTekst text={"nana julie augustine"} />
      </div>
      <section>
        <ChosenList />
      </section>
    </FadeInAnimation>
  );
};

export default Forside;
