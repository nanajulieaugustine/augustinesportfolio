"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StaggeredFade from "./StaggeredFade";

const Loading = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="absolute flex items-cemter justify-center w-screen h-screen"
      
    >
              <StaggeredFade className="absolute top-1/2" text="loading..."></StaggeredFade>
         <motion.img
        src="/kande.svg"
        alt="logo"
        className="absolute object-cover h-full w-full z-100"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default Loading;
