import { useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/photo_profil.webp";
import { motion, useAnimation } from "framer-motion";

const animationVariants = (delay) => ({
  hidden: { x: -100, opacity: 0, willChange: "transform, opacity" },
  visible: {
    x: 0,
    opacity: 1,
    willChange: "transform, opacity",
    transition: { duration: 1, delay: delay, ease: "easeInOut" },
  },
});

const Hero = () => {
  const controls = useAnimation();
  const imgControls = useAnimation();

  useEffect(() => {
    controls.start("visible");
    imgControls.start({
      x: 0,
      opacity: 1,
      willChange: "transform, opacity",
      transition: { duration: 1.2, delay: 1.5, ease: "easeInOut" },
    });

    const handleResize = () => {
      controls.start("visible");
      imgControls.start({
        x: 0,
        opacity: 1,
        willChange: "transform, opacity",
        transition: { duration: 1.2, delay: 1.5, ease: "easeInOut" },
      });
    };

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
              className="pb-16 mt-4 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Giovanni Gambier
            </motion.h1>
            <motion.span
              variants={animationVariants(0.5)}
              initial="hidden"
              animate={controls}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Développeur Web Full-Stack
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
            initial={{ x: 100, opacity: 0, willChange: "transform, opacity" }}
            animate={imgControls}
            src={profilePic}
            alt="Giovanni Gambier"
            className="h-auto max-h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
