"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LineAnimationInView = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <motion.div className="absolute -z-100 h-full w-full top-0 right-1/2"
      ref={ref}
      initial={{ width: "0%" }}
      animate={{ width: isInView ? "100%" : "0%" }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
        <hr className="border-2 rounded-4xl text-(--pink-accent) relative top-1/2 -z-100"/>
        <motion.img
        src="/ball.svg"
        alt="logo"
        className="h-full w-full"
        style={{ rotate }}
      />
    </motion.div>
  );
};

export default LineAnimationInView;
