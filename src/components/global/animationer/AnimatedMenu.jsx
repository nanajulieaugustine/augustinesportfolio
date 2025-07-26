"use client";
import Select, { components } from "react-select";
import { motion, AnimatePresence } from "framer-motion";
import portfolio from "@/backend/portfolio.json";
import { useState } from "react";

const AnimatedMenu = (props) => {
  return (
    <AnimatePresence>
      {props.selectProps.menuIsOpen && (
        <motion.div
          initial={{ y: -50 }}
          animate={{  y: 0 }}
          exit={{  y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <components.Menu {...props} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedMenu