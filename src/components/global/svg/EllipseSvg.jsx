"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const EllipseSvg = () => {
      const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [1, 0], [0, -1000]);

    return (  
         <motion.div style={{ y }} className="relative -z-100">
        <img src="/ellipse.svg" alt="Logo" className="absolute" />     
        <img src="/ellipse.svg" alt="Logo" className="absolute top-100" />    
        <img src="/ellipse.svg" alt="Logo" className="absolute top-50" />       
        </motion.div>
    );
}
 
export default EllipseSvg;