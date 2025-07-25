"use client";
import { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import portfolio from "@/backend/portfolio.json";
import KategoriProces from "./KategoriProces";
import ProcesCard from "./ProcesCard";
import RoundedKarrusel from "./RoundedKarrusel";

const ProcesScroll = () => {
  
  const items = portfolio.flatMap(p => p.proces_items || []) || [];


  const [activeCategory, setActiveCategory] = useState("");

  const filteredKategori = activeCategory
    ? items.filter(
        (item) =>
          item.kategori?.toLowerCase() === activeCategory.toLowerCase()
      )
    : items;

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setIndex((prev) =>
      prev < filteredKategori.length - 1 ? prev + 1 : prev
    );
  };

  const isPrevDisabled = index === 0;
  const isNextDisabled =
    index === filteredKategori.length - 1 || filteredKategori.length === 0;

  if (index >= filteredKategori.length && filteredKategori.length > 0) {
    setIndex(0);
  }

  return (
    <section className=" bg-(--pink-accent) mt-20 p-5 flex flex-col w-full overflow-hidden rounded-4xl">
      <div className="ml-auto">
        <KategoriProces activeGenre={activeCategory} setActiveGenre={setActiveCategory} />
      </div>
      <div className="relative w-full flex items-top gap-10 ">
        <BsArrowLeftCircle
          onClick={!isPrevDisabled ? handlePrev : undefined}
          className={`white relative top-50 transition-all ${
            isPrevDisabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:scale-110"
          }`}
          size={50}
        />
        <div className="overflow-hidden w-full flex flex-col">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)`}}
          >
            {filteredKategori.length > 0 ? (
              filteredKategori.map((item, i) => (
                <div key={i} className="min-w-full">
                  <ProcesCard item={item} />
                </div>
              ))
            ) : (
              ""
            )}
          </div>
        </div>
        <BsArrowRightCircle
          onClick={!isNextDisabled ? handleNext : undefined}
          className={`white relative top-50 transition-all ${
            isNextDisabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:scale-110"
          }`}
          size={50}
        />
      </div>
    </section>
  );
};

export default ProcesScroll;
