import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Icon = ({ IconComponent, duration }) => (
  <motion.div
    variants={iconVariants(duration)}
    initial="initial"
    animate="animate"
    className="rounded-2xl border-4 border-neutral-800 p-4">
    <IconComponent className="text-7xl md:text-6xl lg:text-7xl text-white-800 border-4 border-purple-200 rounded-2xl" />
  </motion.div>
);

const Techno = () => {
  const icons = [
    { component: RiReactjsLine, duration: 2.5 },
    { component: TbBrandNextjs, duration: 3 },
    { component: SiMongodb, duration: 3.5 },
    { component: DiRedis, duration: 4 },
    { component: FaNodeJs, duration: 5 },
    { component: BiLogoPostgresql, duration: 6 },
  ];

  return (
    <div className="border-b border-neutral-800 pb-8 md:pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 1.5 }}
        className="my-12 md:my-20 text-center text-4xl">
        Technologies
      </motion.h2>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-4">
          {icons.map((icon, index) => (
            <Icon
              key={index}
              IconComponent={icon.component}
              duration={icon.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techno;
