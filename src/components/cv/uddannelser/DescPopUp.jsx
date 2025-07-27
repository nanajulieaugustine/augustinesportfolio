"use client";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DescPopUp = ({ titel, beskrivelse, onClose }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div className="bg-(--pink-accent) w-100 md:w-150 h-content rounded-4xl z-10 p-5 absolute shadow-2xl"
    ref={ref}
    initial={{scale: "50%", opacity: 0}}
    animate={{ scale: isInView ? "100%" : "0%",
      opacity: isInView ? 1 : 0,
     }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex justify-between items-top">
        <h2 className="white">{titel}</h2>
        <IoIosCloseCircleOutline
          className="text-white text-4xl cursor-pointer hover:scale-110 tranistion-all duration-300"
          onClick={onClose}
        />
      </div>
      <p>{beskrivelse}</p>
    </motion.div>
  );
};

export default DescPopUp;
