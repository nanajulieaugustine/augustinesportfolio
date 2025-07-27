"use client";
import { useState, useMemo } from "react";
import ErhvervserfaringCard from "./ErhvervserfaringCard";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import portfolio from "@/backend/portfolio.json";
import Filter from "./Filter";
import KategoriCounter from "@/components/singleview/proces/KategoriCounter";
import ExpereinceSvg from "@/components/global/svg/ExpereinceSvg";

const ErhvervserfaringClient = () => {
  const erhvervserfaring = useMemo(
    () => portfolio.filter((p) => p.erhvervserfaring),
    []
  );

  const [activeCategory, setActiveCategory] = useState("");

  const filteredKategori = activeCategory
    ? erhvervserfaring.filter(
        (erfaring) =>
          erfaring.kategori.toLowerCase() === activeCategory.toLowerCase()
      )
    : erhvervserfaring;

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
  const isNextDisabled = index === filteredKategori.length - 1 || filteredKategori.length === 0;

  if (index >= filteredKategori.length && filteredKategori.length > 0) {
    setIndex(0);
  }

  return (
    <section className="mt-20 p-5 flex flex-col w-full overflow-hidden">
      <div className="flex justify-between items-center">
         <KategoriCounter 
        currentIndex={index + 1} 
        totalLength={filteredKategori.length || 0}
      />
        <Filter activeGenre={activeCategory} setActiveGenre={setActiveCategory} />
      </div>
      <ExpereinceSvg/>
      <div className="relative w-full flex items-center gap-10">
        <BsArrowLeftCircle
          onClick={!isPrevDisabled ? handlePrev : undefined}
          className={`white transition-all ${
            isPrevDisabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:scale-110"
          }`}
          size={50}
        />
        <div className="overflow-hidden w-full flex flex-col">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {filteredKategori.length > 0 ? (
              filteredKategori.map((item) => (
                <div key={item.id} className="min-w-full">
                  <ErhvervserfaringCard
                    activeCategory={activeCategory}
                    erhvervserfaring={item}
                  />
                </div>
              ))
            ) : (
              ""
            )}
          </div>
        </div>
        <BsArrowRightCircle
          onClick={!isNextDisabled ? handleNext : undefined}
          className={`white transition-all ${
            isNextDisabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:scale-110"
          }`}
          size={50}
        />
      </div>
    </section>
  );
};

export default ErhvervserfaringClient;
