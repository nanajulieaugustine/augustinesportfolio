"use client";
import { motion } from "framer-motion";

const FadeInAnimation = ({children}) => {
    return ( 
    <motion.div
      initial={{
        filter: "blur(20px)",
        opacity: 0,
      }}
      animate={{
        scale: ["120%", "100%"],
        filter: ["blur(0px)"],
        opacity: [1],
      }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ position: "relative", zIndex: 0 }}
    >
      {children}
    </motion.div>
    )
}
 
export default FadeInAnimation;