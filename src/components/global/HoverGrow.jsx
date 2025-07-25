"use client";

import { motion } from "framer-motion";

export default function HoverGrowText({ children, className = "" }) {
  const letters = children.split("");

  return (
    <span className={`inline-flex ${className}`}>
      {letters.map((letter, i) => (
        <HoverGrowLetter
          key={i}
          letter={letter}
          index={i}
          total={letters.length}
        />
      ))}
    </span>
  );
}

function HoverGrowLetter({ letter, index, total }) {
  return (
    <motion.span
      className="inline-block"
      onHoverStart={(e) => {
        // Find forrige og næste søskende
        const parent = e.target.parentElement;
        if (parent) {
          const prev = parent.children[index - 1];
          const next = parent.children[index + 1];
          if (prev) prev.style.scale = 1.1;
          if (next) next.style.scale = 1.1;
        }
      }}
      onHoverEnd={(e) => {
        const parent = e.target.parentElement;
        if (parent) {
          const prev = parent.children[index - 1];
          const next = parent.children[index + 1];
          if (prev) prev.style.scale = 1;
          if (next) next.style.scale = 1;
        }
      }}
      whileHover={{ scale: 1.4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {letter}
    </motion.span>
  );
}
