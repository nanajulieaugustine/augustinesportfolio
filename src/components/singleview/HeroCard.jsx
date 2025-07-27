"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import HorizontalScroll from "../global/animationer/HorizontalScroll";
import LineAnimationInView from "../global/svg/LineAnimation";
import StaggeredFade from "../global/animationer/StaggeredFade";
import Link from "next/link";
import Image from "next/image";

const HeroCard = ({ item }) => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div>
      <HorizontalScroll className="flex justify-end">
        <LineAnimationInView />
        <Image
          src={`/${item.display_image}`}
          alt={`Billede af ${item.titel}`}
          width={700}
          height={700}
        />
      </HorizontalScroll>

      <div className="relative -top-20">
        <h2>{item.kategori}</h2>
        <div className="flex items-baseline">
          <StaggeredFade text={item.titel} />
          <h4>{item.periode}</h4>
        </div>

        <motion.h2 style={{ scale, opacity }} className="white italic">
          {item.beskrivelse_lang}
        </motion.h2>

        <motion.hr style={{ y }} className="white mt-5" />

        {item.link && (
          <Link href={`${item.link}`} target="_blank">
            <h3 className="hover:scale-103 transition-all duration-300 cursor-pointer">
              {`Gå til ${item.titel}`}
            </h3>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default HeroCard;
