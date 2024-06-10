import aboutImg from "../assets/about.webp";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="my-20 text-center text-4xl">
        À propos de moi
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8">
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1.75, delay: 0.2, ease: "easeIn" }}>
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={aboutImg}
              alt="À propos - image"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 lg:mt-0"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1.75, delay: 0.2, ease: "easeIn" }}>
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
