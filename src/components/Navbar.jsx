import Logo from "../assets/Logo.png";
import {
  FaLinkedin,
  FaGithub,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-8 md:mb-20 flex items-center justify-between py-4 md:py-6">
      <div className="flex-shrink-0 items-center">
        <img src={Logo} alt="Logo" className="w-24 md:w-32" />
      </div>
      <div className="flex m-4 items-center justify-center md:justify-end gap-4 text-xl">
        <div className="gap-2 flex">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit">
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit">
            <FaTwitterSquare />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit">
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
