"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WindowLoad = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={{ scale: isInView ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="h-screen flex items-center justify-center"
    >
      <motion.img
        src="/ball.svg"
        alt="logo"
        className="w-200 h-200"
        initial={{ rotate: 0 }}
        animate={{ rotate: isInView ? 360 : 0 }}
        transition={{repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default WindowLoad;
