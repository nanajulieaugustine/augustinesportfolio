"use client";

import Link from "next/link";
import DescBackground from "./DescBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ChosenList = () => {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true); // Starter animation
  };

  const handleAnimationComplete = () => {
    if (isAnimating) {
      router.push("/multimediedesign");
    }
  };

  return (
    <motion.div style={{ y }} className="flex justify-center gap-6">
        <DescBackground onClick={handleClick}>
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
            animate={isAnimating ? { scale: 5, opacity: 0.5, filter: 'blur(20px)' } : { scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            onAnimationComplete={handleAnimationComplete}
          />
        </DescBackground>

      <Link href="/kunst">
        <DescBackground>
          <h1 className="white">kunst</h1>
          <h2 className="white">
            DOKUMENTAR // FOTOGRAFERING // BILLEDKUNST // LITTERATUR
          </h2>
        </DescBackground>
      </Link>
    </motion.div>
  );
};

export default ChosenList;
