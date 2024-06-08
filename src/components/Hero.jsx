import { useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Photo_profil_OC.png";
import { motion, useAnimation } from "framer-motion";

const animationVariants = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay, ease: "easeInOut" },
  },
});

const Hero = () => {
  const controls = useAnimation();
  const imgControls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      controls.start("visible");
      imgControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1.2, delay: 1.5, ease: "easeInOut" },
      });
    };

    handleResize(); // Trigger the animation on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [controls, imgControls]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={animationVariants(0)}
              initial="hidden"
              animate={controls}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              John Doe
            </motion.h1>
            <motion.span
              variants={animationVariants(0.5)}
              initial="hidden"
              animate={controls}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Dev Web
            </motion.span>
            <motion.p
              variants={animationVariants(1)}
              initial="hidden"
              animate={controls}
              className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-6 flex justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={imgControls}
            transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
            src={profilePic}
            alt="John Doe"
            className="h-auto max-h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
