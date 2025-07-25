"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const RoterendeKandeSvg = () => {
      const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [1, 0], [0, -500]);

  return ( 
    <motion.div style={{ y }}
      className="absolute top-0 left-0 w-full h-full"
    >
      <img 
        src="/kande.svg" 
        alt="logo" 
        className="absolute w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default RoterendeKandeSvg;
