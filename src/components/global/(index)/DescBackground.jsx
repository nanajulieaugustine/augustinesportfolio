"use client"
import { motion } from "framer-motion";
import { useState } from "react";

const DescBackground = ({ onClick, children }) => {

  return (
    <div onClick={onClick}
      className="cursor-pointer bg-(--pink-accent) rounded-4xl p-5 flex flex-col gap-4 max-w-115 min-h-150 shadow-2xl hover:scale-105 transition-all duration-300"
    >
      {children}
    </div>
  );
};

export default DescBackground;
