"use client";
import { motion, AnimatePresence } from "framer-motion";

const KategoriCounter = ({ currentIndex, totalLength }) => {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;

  const progress = totalLength > 0 ? currentIndex / totalLength : 0;

  return (
    <div className="relative top-1/2 left-0 z-10 w-36 h-36">
      <svg className="absolute top-0 left-0 w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="var(--pink-secondary)"
          strokeWidth="4"
          fill="none"
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="var(--pink-primary)"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
          initial={false}
          animate={{
            strokeDashoffset: circumference * (1 - progress),
          }}
          transition={{ duration: 0.5 }}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-(--pink-primary) text-2xl font-bold italic">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentIndex}
          </motion.span>
        </AnimatePresence>
        <span className="ml-1">/ {totalLength}</span>
      </div>
    </div>
  );
};

export default KategoriCounter;
