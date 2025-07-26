"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PageCounter = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = scrollTop / docHeight;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const radius = 44;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="fixed -z-200 w-36 h-36">
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
          transition={{ duration: 0.2 }}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-(--pink-primary) text-2xl font-bold italic">
        <motion.span
          key={Math.round(progress * 100)}
        >
          {Math.round(progress * 100)}%
        </motion.span>
      </div>
    </div>
  );
};

export default PageCounter;
