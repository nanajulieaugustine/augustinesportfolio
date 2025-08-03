"use client";

import Link from "next/link";
import DescBackground from "./DescBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ChosenList = () => {
  const [destination, setDestination] = useState(null);


  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (kategori) => {
  setDestination(kategori);
  setIsAnimating(true);
};


 const handleAnimationComplete = () => {
  if (isAnimating && destination) {
    router.push(`/portfolio?kategori=${destination}`);
  }
};



  return (
    <motion.div style={{ y }} className="flex flex-col md:flex-row justify-center gap-6">
        <DescBackground onClick={() => handleClick("multimediedesign")}>
          <h1 className="white">
            multi
            <br />
            medie
            <br />
            design
          </h1>
          <h2 className="white">
            FRONTEND // CONTENT CREATION // DIGITAL DESIGN // UX/UI DEVELOPMENT
          </h2>

          <motion.img
            src="/mmd_display.webp"
            alt="billede tilhørende multimediedesign liste"
            className="rounded-3xl"
            initial={{ scale: 1, opacity: 1, filter: 'blur(20px' }}
            animate={isAnimating ? { scale: 2, opacity: 0.9, filter: 'blur(20px)' } : { scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            onAnimationComplete={handleAnimationComplete}
          />
        </DescBackground>

        <DescBackground onClick={() => handleClick("kunst")}>
          <h1 className="white">kunst</h1>
          <h2 className="white">
            DOKUMENTAR // FOTOGRAFERING // BILLEDKUNST // LITTERATUR
          </h2>
           <motion.img
            src="/mmd_display.webp"
            alt="billede tilhørende multimediedesign liste"
            className="rounded-3xl"
            initial={{ scale: 1, opacity: 1, filter: 'blur(20px' }}
            animate={isAnimating ? { scale: 2, opacity: 0.9, filter: 'blur(20px)' } : { scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            onAnimationComplete={handleAnimationComplete}
          />
        </DescBackground>
    </motion.div>
  );
};

export default ChosenList;
