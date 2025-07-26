"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const WorkSvg = () => {
      const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);

    return (  
         <motion.div style={{ y }} className="relative -z-100">
        <img src="/work.svg" alt="Logo" className="absolute" />
        </motion.div>
    );
}
 
export default WorkSvg;