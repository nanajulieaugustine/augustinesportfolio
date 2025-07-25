"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const SlidingImages = ({ item }) => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <motion.div style={{ y }} className="relative w-full h-full -z-100">
      <video
        src={`/singleview/${item.video}`}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 right-150 h-100 w-full -z-10"
      />
    </motion.div>
  );
};

export default SlidingImages;
