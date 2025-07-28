"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HorizontalScroll = ({ children, className }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll()

  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "300%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <motion.div ref={ref} style={{ scale, x }} className={className}>
      {children}
    </motion.div>
  );
};

export default HorizontalScroll;
