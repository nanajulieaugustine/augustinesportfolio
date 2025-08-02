"use client";
import { useState, useEffect } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import portfolio from "@/backend/portfolio.json";
import Filter from "./Filter";
import ErhvervserfaringCard from "./ErhvervserfaringCard";
import KategoriCounter from "@/components/singleview/proces/KategoriCounter";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const ErhvervserfaringClient = () => {
  const items = portfolio.filter((p)=>p.erhvervserfaring === true);

  const [activeCategory, setActiveCategory] = useState("");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // slide direction
  const [prevCategory, setPrevCategory] = useState("");

  const filteredKategori = activeCategory
    ? items.filter(
        (item) =>
          item.kategori?.toLowerCase() === activeCategory.toLowerCase()
      )
    : items;

  // Reset index with animation when category changes
  useEffect(() => {
    if (activeCategory !== prevCategory) {
      setDirection(0);
      setIndex(0);
      setPrevCategory(activeCategory);
    }
  }, [activeCategory]);

  const handlePrev = () => {
    if (index > 0) {
      setDirection(-1);
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < filteredKategori.length - 1) {
      setDirection(1);
      setIndex(index + 1);
    }
  };

  const isPrevDisabled = index === 0;
  const isNextDisabled =
    index === filteredKategori.length - 1 || filteredKategori.length === 0;

  const currentItem = filteredKategori[index];

  return (
    <section className="mt-20 p-5 flex flex-col w-full overflow-hidden rounded-4xl">
      <div className="flex justify-between items-center">
        <KategoriCounter
          currentIndex={index + 1}
          totalLength={filteredKategori.length || 0}
        />
        <Filter
          activeGenre={activeCategory}
          setActiveGenre={setActiveCategory}
        />
      </div>

      <div className="relative w-full flex items-top gap-10">
        <BsArrowLeftCircle
          onClick={!isPrevDisabled ? handlePrev : undefined}
          className={`white transition-all absolute top-10 ${
            isPrevDisabled
              ? "opacity-30 cursor-not-allowed"
              : "cursor-pointer hover:scale-110"
          }`}
          size={50}
        />

        <div className="w-full flex">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentItem?.id || index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="w-full pl-10 pr-10"
            >
              {currentItem && <ErhvervserfaringCard erhvervserfaring={currentItem} />}
            </motion.div>
          </AnimatePresence>
        </div>

        <BsArrowRightCircle
          onClick={!isNextDisabled ? handleNext : undefined}
          className={`white transition-all absolute right-2 top-10 ${
            isNextDisabled
              ? "opacity-30 cursor-not-allowed"
              : "cursor-pointer hover:scale-110"
          }`}
          size={50}
        />
      </div>
    </section>
  );
};

export default ErhvervserfaringClient;
