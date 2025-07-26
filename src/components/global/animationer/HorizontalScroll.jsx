"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HorizontalScroll = ({ children, className }) => {
  const ref = useRef(null);

  // Track vertikal scroll progress for dette element i viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // start når elementet rammer bunden, slut når det er væk foroven
  });

  // Map scroll progress til x-position: fra 100% til 0%
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

  return (
    <motion.div ref={ref} style={{ x }} className={className}>
      {children}
    </motion.div>
  );
};

export default HorizontalScroll;
