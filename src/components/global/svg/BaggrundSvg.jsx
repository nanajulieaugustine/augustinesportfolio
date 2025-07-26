"use client";

import { motion } from "framer-motion";

const BaggrundSvg = () => {

    return ( 
         <motion.img src="/baggrund.svg" alt="baggrund" className="fixed top-0 w-screen h-screen left-0 object-cover -z-1000 blur-xs"/>
     );
}
 
export default BaggrundSvg ;