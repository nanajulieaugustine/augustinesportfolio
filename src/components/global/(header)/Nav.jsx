"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const pathname = usePathname(); // Get current path

  return (
    <ul className="flex gap-10">
      {[
        { href: "/", label: "Forside" },
        { href: "/cv", label: "CV" },
        { href: "/om", label: "Om mig" },
      ].map(({ href, label }) => (
        <li className="uppercase" key={href}>
          <Link
            href={href}
            className={`px-8 py-2 rounded-4xl hover:bg-(--pink-accent) hover:rounded-4xl transition-all duration-300 ${
              pathname === href
                ? "text-(--white-secondary) bg-(--pink-accent)"
                : "text-(--white-primary)"
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
