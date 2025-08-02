"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const BurgerMenu = ({ isVisible, closeMenu }) => {
  const links = [
    { href: "/forside", text: "Portfolio" },
    { href: "/cv", text: "CV" },
    { href: "/om", text: "Om mig" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed top-0 left-0 pt-25 w-full h-screen bg-(--black) z-90 overflow-y-scroll"
        >
          <ul className="p-10 overflow-y-auto grid gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeMenu}>
                  <h1 className="hover:scale-102 transition-all duration-300">{link.text}</h1>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BurgerMenu;
