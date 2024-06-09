import { SiGithub } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
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
    <IconComponent
      className="text-7xl md:text-6xl lg:text-7xl rounded-2xl"
      style={{
        color: getIconColor(IconComponent),
        backgroundColor: getBackgroundColor(IconComponent),
      }}
    />
  </motion.div>
);

const getIconColor = (IconComponent) => {
  if (IconComponent === SiGithub) {
    return "#181717"; // Couleur associée à GitHub
  } else if (IconComponent === FaHtml5) {
    return "#E34F26"; // Couleur associée à HTML5
  } else if (IconComponent === FaCss3Alt) {
    return "#1572B6"; // Couleur associée à CSS3
  } else if (
    IconComponent === TbBrandJavascript ||
    IconComponent === FaReact ||
    IconComponent === FaNode
  ) {
    return "#F7DF1E"; // Couleur associée à JavaScript, React et Node.js
  } else if (IconComponent === SiMongodb) {
    return "#47A248"; // Couleur associée à MongoDB
  } else {
    return "#000000"; // Couleur par défaut
  }
};

const getBackgroundColor = (IconComponent) => {
  if (
    IconComponent === SiGithub ||
    IconComponent === FaHtml5 ||
    IconComponent === FaCss3Alt ||
    IconComponent === TbBrandJavascript ||
    IconComponent === FaReact ||
    IconComponent === FaNode ||
    IconComponent === SiMongodb
  ) {
    return "#ffffff";
  } else {
    return "transparent";
  }
};

const Techno = () => {
  const icons = [
    { component: SiGithub, duration: 2.5 },
    { component: FaHtml5, duration: 3 },
    { component: FaCss3Alt, duration: 3.5 },
    { component: TbBrandJavascript, duration: 4 },
    { component: FaReact, duration: 5 },
    { component: SiMongodb, duration: 6 },
    { component: FaNode, duration: 7 },
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
