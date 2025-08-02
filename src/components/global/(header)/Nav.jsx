"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const pathname = usePathname();

  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleSideMenu = () => setShowSideMenu((prev) => !prev);

    const closeSideMenu = () => {
    if (showSideMenu) {
      toggleSideMenu();
    }
  };

  return (
    <nav className="fixed top-0 w-full z-30 duration-300 ">
      <div className="flex items-center justify-between py-4 px-8">
        <ul className="z-100">
          <li>
            <Link href="/forside" onClick={closeSideMenu}>
              <Image
                src={"/logo/logo.png"}
                alt={"logo"}
                width={80}
                height={80}
              />
            </Link>
          </li>
        </ul>

        {/* Desktop navigation */}
        <ul className="hidden md:flex md:flex-wrap md:justify-center gap-10">
          {[
            { href: "/forside", label: "portfolio" },
            { href: "/cv", label: "CV" },
            { href: "/om", label: "Om Mig" },
          ].map(({ href, label }) => (
            <li className="uppercase" key={href}>
              <Link
                href={href}
                className={`px-8 py-2 rounded-4xl hover:bg-(--pink-accent) hover:rounded-4xl transition-all duration-300 ${
                  pathname.startsWith(href)
                    ? "text-(--white-primary) bg-(--pink-accent)"
                    : "text-(--white-primary)"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          aria-label="gå til menu"
          className="block md:hidden cursor-pointer hover:scale-105 transition-all z-100 duration-300"
          onClick={toggleSideMenu}
        >
          {showSideMenu ? (
            <IoMdClose size={40} />
          ) : (
            <IoIosMenu size={40} />
          )}
        </button>

        {/* Mobilmenu — vises kun når showSideMenu er true */}
        {showSideMenu && <BurgerMenu isVisible={showSideMenu} closeMenu={closeSideMenu} />}

      </div>
    </nav>
  );
};

export default Header;
