import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-5">
      <hr className="text-(--white-primary) mt-15 mb-3" />
      <div className="flex justify-between align-top">
        <div>
          <h1 className="footertextline">portfolio</h1>
          <h2 className="pink-secondary">nana julie augustine</h2>
          <p>2300 København S</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="https://www.linkedin.com/in/nana-julie-augustine-1b575124a/"
            target="_blank"
          >
            <CiLinkedin
              className="text-(--white-primary) hover:text-(--pink-secondary) transition-all duration-300"
              size={40}
            />
          </Link>
          <Link href="https://www.instagram.com/karmakaelling/" target="_blank">
            <IoLogoInstagram
              className="text-(--white-primary) hover:text-(--pink-secondary) transition-all duration-300"
              size={40}
            />
          </Link>
        </div>
      </div>
      <p className="text-center">nana.jensen.1012@gmail.com</p>
    </div>
  );
};

export default Footer;
