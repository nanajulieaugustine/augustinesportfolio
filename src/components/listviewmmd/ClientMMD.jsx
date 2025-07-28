"use client";
import ListCard from "./ListCard";
import portfolio from "@/backend/portfolio.json";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useRef, useState, useEffect } from "react";
import WorkSvg from "../global/svg/WorkSvg";
import EllipseSvg from "../global/svg/EllipseSvg";
import HorizontalScroll from "../global/animationer/HorizontalScroll";
import DisplayText from "../global/animationer/DisplayText";

const ClientMMD = () => {
  const webudvikling = portfolio.filter((p) => p.kategori === "webudvikling");
  const creativebranding = portfolio.filter((p) => p.kategori === "creative branding");
  const fotografering = portfolio.filter((p) => p.kategori === "fotografering");
  const design = portfolio.filter((p) => p.kategori === "design");

  const categories = [
    { title: "Webudvikling", items: webudvikling },
    { title: "Creative branding", items: creativebranding },
    { title: "Fotografering", items: fotografering },
    { title: "Design", items: design },
  ];

  const renderCategory = (cat, index) => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollButtons = () => {
      const el = scrollRef.current;
      if (el) {
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
      }
    };

    const handlePrev = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: -500,
          behavior: "smooth",
        });
      }
    };

    const handleNext = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 500,
          behavior: "smooth",
        });
      }
    };

    useEffect(() => {
      const el = scrollRef.current;
      if (!el) return;

      updateScrollButtons();
      el.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);

      return () => {
        el.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
      };
    }, []);

    return (
      <div key={index} className="w-full px-(--content-width)">
        <EllipseSvg/>
        <DisplayText className={`px-(--content-width) ${index % 2 === 1 ? "text-right" : ""}`}
          text={cat.title}
        />
      <WorkSvg/>
        <div
          ref={scrollRef}
          className="overflow-x-scroll scrollbar-hide w-full"
        >
          <ul className="flex gap-10 min-w-max">
            {cat.items.map((item, id) => (
              <li key={id}>
                <ListCard item={item} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-30 justify-center pb-10">
          <button
            onClick={handlePrev}
            disabled={!canScrollLeft || cat.items.length === 0}
            className="z-10 cursor-pointer hover:scale-110 transition-all text-white disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            <BsArrowLeftCircle size={40} />
          </button>
          <button
            onClick={handleNext}
            disabled={!canScrollRight || cat.items.length === 0}
            className="z-10 cursor-pointer hover:scale-110 transition-all text-white disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            <BsArrowRightCircle size={40} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-20">
      {categories.map((cat, index) => renderCategory(cat, index))}
    </div>
  );
};

export default ClientMMD;
