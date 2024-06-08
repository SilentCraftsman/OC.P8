import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const ExperienceItem = ({ experience }) => (
  <div className="mb-8 flex flex-wrap lg:justify-center">
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, x: -80 }}
      transition={{ duration: 1 }}
      className="w-full lg:w-1/4 lg:pr-8 mb-4 lg:mb-0">
      <motion.p
        className="mb-2 text-sm text-neutral-400"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 100 }}
        transition={{ duration: 1 }}>
        {experience.year}
      </motion.p>
    </motion.div>
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full lg:w-3/4">
      <h6 className="mb-2 font-semibold">
        {experience.role} -{" "}
        <span className="text-sm text-purple-100">{experience.company}</span>
      </h6>
      <p className="mb-4 text-neutral-400">{experience.description}</p>
      <div className="flex flex-wrap">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="mr-2 mt-2 lg:mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  </div>
);

const Experience = () => (
  <div className="border-b border-neutral-900 pb-4">
    <motion.h2
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="my-10 text-center text-4xl">
      Expérience
    </motion.h2>
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-4xl px-4">
      {EXPERIENCES.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </motion.div>
  </div>
);

export default Experience;
