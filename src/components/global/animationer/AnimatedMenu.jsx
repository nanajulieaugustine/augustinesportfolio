"use client";
import { components } from "react-select";
import { motion } from "framer-motion";

const AnimatedMenu = (props) => {
  return (
    <components.Menu {...props}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        {props.children}
      </motion.div>
    </components.Menu>
  );
};

export default AnimatedMenu;
