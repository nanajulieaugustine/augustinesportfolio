"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RoterendeKandeSvg = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="absolute top-0 left-1/2 w-100 h-100"
      animate={{ scale: isInView ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.img
        src="/kande.svg"
        alt="logo"
        className="absolute top-100 w-full h-full object-cover"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      />
      <motion.img
        src="/kande.svg"
        alt="logo"
        className="absolute top-150 w-full h-full object-cover"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />
      <motion.img
        src="/kande.svg"
        alt="logo"
        className="absolute top-200 w-full h-full object-cover"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />
      <motion.img
        src="/kande.svg"
        alt="logo"
        className="absolute top-250 w-full h-full object-cover"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
      />
    </motion.div>
  );
};

export default RoterendeKandeSvg;
