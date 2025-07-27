"use client";
import { motion } from "framer-motion";
import StaggeredFade from "../global/animationer/StaggeredFade";

const Billeder = ({item}) => {

    return ( 
        <motion.ul className="flex flex-col overflow-hidden relative">
            {item.billeder.map((billede, index) => (
  <li key={index} className="h-screen w-screen relative left-0 md:left-1/2 md:even:left-0">
    <div className="flex">
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
           <StaggeredFade className="absolute z-10" text={`${index + 1}/${item.billeder.length}`}/>
    </div>
        </li>
        ))}
        </motion.ul>
     );
}
 
export default Billeder;