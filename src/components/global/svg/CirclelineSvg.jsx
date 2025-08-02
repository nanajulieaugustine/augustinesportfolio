"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CircleLineSvg = ({ isHovered, item, isAnimating, setIsAnimating }) => {
  const controls = useAnimation();
  const router = useRouter();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!isAnimating) {
      controls.start({
        scaleY: isHovered ? "100%" : "0%",
        opacity: isHovered ? 1 : 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
  }, [isHovered, isAnimating, controls]);

  const handleClick = () => {
    setIsAnimating(true);
    controls.start({
      scale: [1, 2],
      opacity: [1, 0],
      transition: { duration: 0.5, ease: "easeIn" },
    }).then(() => {
      setShow(false);
      router.push(`/multimediedesign/${item.id}`);
    });
  };

  if (!show) return null;

  return (
    <motion.div
      onClick={handleClick}
      animate={controls}
      initial={{ scaleY: 0, opacity: 0 }}
      className="absolute top-0 left-0 w-full h-full z-50"
    >
      <img
        src="/circlelines.svg"
        alt="logo"
        className="absolute w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default CircleLineSvg;
