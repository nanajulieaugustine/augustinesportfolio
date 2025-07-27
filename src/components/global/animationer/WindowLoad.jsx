"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StaggeredFade from "./StaggeredFade";

const WindowLoad = () => {
  const ref = useRef(null);
  const router = useRouter();
  const isInView = useInView(ref, { once: true });

  const [hasNavigated, setHasNavigated] = useState(false);
  const [showScrollAnimation, setShowScrollAnimation] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll-baseret scale og rotation
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 50]);
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Scroll-handler til navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight;

      if (scrollBottom && !hasNavigated) {
        setHasNavigated(true);
        router.push("/forside");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNavigated, router]);

  return (
    <div ref={ref} className="h-[200vh] relative overflow-hidden">
                <StaggeredFade className="white absolute top-30 right-1/2" text="velkommen"/>
        <StaggeredFade className="white absolute top-50 left-1/2" text="velkommen"/>
       <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="border-2 rounded-4xl border-(--pink-accent) absolute -z-100 origin-center top-50 w-full"
            />
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        onAnimationComplete={() => setShowScrollAnimation(true)}
        className="h-screen w-screen flex items-center justify-center fixed top-0 left-0 origin-center z-10 pointer-events-none"
      >
        <motion.img
          src="/ball.svg"
          alt="logo"
          style={{
            scale: showScrollAnimation ? scrollScale : 1,
            rotate: showScrollAnimation ? scrollRotate : 0,
          }}
          className="w-400 h-400"
        />
      </motion.div>
    </div>
  );
};

export default WindowLoad;
