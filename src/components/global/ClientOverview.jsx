"use client";
import { useState } from "react";
import ErhvervserfaringCard from "../(cv)/ErhvervserfaringCard";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const ClientOverview = ({ overviews }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : overviews.length - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < overviews.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="bg-(--pink-accent) mt-20 p-5 flex flex-col items-center w-full overflow-hidden rounded-4xl">
      <h2 className="mb-4">Erhvervserfaring</h2>

      <div className="relative w-full max-w-3xl flex items-center">
        <BsArrowLeftCircle
          onClick={handlePrev}
          className="white cursor-pointer hover:scale-110 transition-all"
          size={50}
        />
        <div className="overflow-hidden w-full flex flex-col">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {overviews.map((overview) => (
              <div key={overview.id} className="min-w-full">
                <ErhvervserfaringCard overview={overview} />
              </div>
            ))}
          </div>
        </div>
        <BsArrowRightCircle
          onClick={handleNext}
          className="white cursor-pointer hover:scale-110 transition-all"
          size={50}
        />
      </div>
    </section>
  );
};

export default ClientOverview;
