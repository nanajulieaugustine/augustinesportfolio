"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const DisplayText = ({ text, className = '' }) => {
  const containerRef = useRef(null);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const words = text.split(" ");

  return (
    <motion.h2
      ref={containerRef}
      className={`${className}`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {words.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={wordVariant}  style={{ display: 'inline-block', marginRight: '0.25em' }}>
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default DisplayText;
