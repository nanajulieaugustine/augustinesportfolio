"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const KlikPaaCirklen = () => {
      const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);

    return (  
         <motion.div style={{ y }} className="relative right-80 -z-100">
        <img src="/klikpaacirklen.svg" alt="Logo" className="absolute" />
        </motion.div>
    );
}
 
export default KlikPaaCirklen;