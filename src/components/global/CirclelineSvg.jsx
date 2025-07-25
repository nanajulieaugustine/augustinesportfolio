"use client";
import { motion } from "framer-motion";

const CircleLineSvg = ({ isHovered }) => {
  return ( 
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ 
        scaleY: isHovered ? "100%" : "0%",
        opacity: isHovered ? 1 : 0,        
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-full h-full"
    >
      <img 
        src="/circlelines.svg" 
        alt="logo" 
        className="absolute w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default CircleLineSvg;
