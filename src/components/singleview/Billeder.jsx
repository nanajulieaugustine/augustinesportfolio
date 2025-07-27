"use client";
import { motion, useScroll, useTransform, useInView, easeInOut } from "framer-motion";
import { useRef } from "react";

const Billeder = ({item}) => {
  const ref = useRef(null);

    return ( 
        <motion.ul className="flex flex-col overflow-hidden relative">
            {item.billeder.map((billede, index) => (
  <li key={index} className="h-screen w-screen relative left-0 md:left-1/2 md:even:left-0">
    <motion.img
            src={`/singleview/${billede}`}
            alt={`billede tilhørende ${item.titel}`}
            width={500}
            height={500}
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="object-cover absolute"
            />
        </li>
        ))}
        </motion.ul>
     );
}
 
export default Billeder;