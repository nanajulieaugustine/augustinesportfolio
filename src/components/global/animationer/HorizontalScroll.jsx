"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HorizontalScroll = ({ children, className }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] 
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

  return (
    <motion.div ref={ref} style={{ x }} className={className}>
      {children}
    </motion.div>
  );
};

export default HorizontalScroll;
