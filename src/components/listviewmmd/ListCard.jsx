"use client";
import { useState } from "react";
import Image from "next/image";
import CircleLineSvg from "../global/svg/CirclelineSvg";
import { motion } from "framer-motion";
const ListCard = ({ item }) => {
  const [hoveredLink, setHoveredLink] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const controls = {
    scale: ["100%", "120%"],
    opacity: [1 , 0.05],
    filter: ['blur(0px)', 'blur(100px)'],
    transition: {duration: 0.5, ease: "easeIn"}
  }

  return (
    <div 
      className="relative p-5 cursor-pointer hover:scale-105 transition-all duration-300"
      onMouseEnter={() => setHoveredLink(true)}
      onMouseLeave={() => setHoveredLink(false)}
    >
      <motion.img 
          src={`/${item.display_image}`} 
          alt={`Billede af ${item.titel}`} 
          width={500} 
          height={500}
          animate={isAnimating ? controls : {}}
        />
      <div className="flex items-end gap-2">
        <h3 className="pink-secondary">{item.titel}</h3>
        <h4 className="italic">{item.type}</h4>
      </div>
      <p className="max-w-100">{item.beskrivelse_ord}</p>

      <CircleLineSvg 
        item={item} 
        isHovered={hoveredLink} 
        isAnimating={isAnimating} 
        setIsAnimating={setIsAnimating}
      />
    </div>
  );
};

export default ListCard;
