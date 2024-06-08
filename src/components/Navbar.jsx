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
          <FaLinkedin />
          <FaGithub />
          <FaTwitterSquare />
          <FaInstagram />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
