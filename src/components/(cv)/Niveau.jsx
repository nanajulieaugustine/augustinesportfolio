"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Niveau = ({ niveau }) => {
  const [width, setWidth] = useState("0%");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setWidth(`${niveau}%`);
    }
  }, [inView, niveau]);

  return (
    <div
      ref={ref}
      className="w-78 h-8 bg-(--pink-secondary) rounded-full overflow-hidden"
    >
      <div
        className="h-full rounded-full bg-(--pink-accent) transition-all duration-1000 ease-out"
        style={{ width }}
      ></div>
    </div>
  );
};

export default Niveau;
