"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StaggeredFade = ({ text, className = '' }) => {
  const variants = {
    hidden: { opacity: 0.5 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05 },
      ease: "easeOut"
    }),
  };

  const letters = text.split('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : ""}
      variants={variants}
      viewport={{ once: true }}
      className={`${className}`}
    >
      {letters.map((letter, i) => (
        <motion.span key={`${letter}-${i}`} variants={variants} custom={i}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default StaggeredFade;
