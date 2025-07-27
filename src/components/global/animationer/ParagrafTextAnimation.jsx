"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ParagrafTekstAnimation = ({ text, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const lines = text.split(' ');

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <p
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: i * 0.5, // Delay per linje
            duration: 1,
            ease: "easeOut",
          }}
          className="block"
        >
          {line}
        </p>
      ))}
    </div>
  );
};

export default ParagrafTekstAnimation;
