"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EllipseSvg from "@/components/global/svg/EllipseSvg";

const RoundedKarrusel = ({ item }) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div
      onClick={handleNext}
      className="cursor-pointer w-full flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Swiper */}
      <Swiper
        modules={[EffectFade, Navigation, Autoplay]}
        effect="fade"
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex + 1);
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full h-[150px] md:h-[400px]"
      >
        {(item.billeder || []).map((billede, i) => (
          <SwiperSlide key={i} className="relative flex justify-center items-center">
          <Image
            src={`/singleview/${billede}`}
            alt={`Billede tilhørende ${item.titel}`}
            fill
            className="object-cover"
          />
        </SwiperSlide>
        ))}
      </Swiper>
<div className="relative ml-auto bottom-20 z-10 w-36 h-36">
  <svg className="absolute top-0 left-0 w-full h-full">
    <circle
      cx="50%"
      cy="50%"
      r="44"
      stroke="var(--pink-secondary)"
      strokeWidth="4"
      fill="none"
    />
    <motion.circle
      cx="50%"
      cy="50%"
      r="44"
      stroke="var(--pink-primary)"
      strokeWidth="4"
      fill="none"
      strokeDasharray={2 * Math.PI * 44}
      strokeDashoffset={
        2 * Math.PI * 44 * (1 - currentIndex / (item.billeder?.length || 1))
      }
      style={{
        transform: "rotate(-90deg)",
        transformOrigin: "50% 50%",
      }}
      initial={false}
      animate={{
        strokeDashoffset:
          2 * Math.PI * 44 * (1 - currentIndex / (item.billeder?.length || 1)),
      }}
      transition={{ duration: 0.5 }}
      strokeLinecap="round"
    />
  </svg>

  <div className="absolute inset-0 flex items-center justify-center text-(--pink-primary) text-2xl font-bold italic">
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {String(currentIndex)}
      </motion.span>
    </AnimatePresence>
    <span className="ml-1">/ {item.billeder?.length || 0}</span>
  </div>
</div>

    </div>
  );
};

export default RoundedKarrusel;
