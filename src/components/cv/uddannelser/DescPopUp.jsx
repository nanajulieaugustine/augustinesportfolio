"use client";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DescPopUp = ({ titel, beskrivelse, onClose }) => {
  return (
    <motion.div
      className="bg-(--pink-accent) w-100 md:w-150 h-content rounded-4xl z-10 p-5 absolute shadow-2xl"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0 , 1], opacity: [ 0 , 1] }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
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
