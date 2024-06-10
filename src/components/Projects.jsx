import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const ProjectItem = ({ project }) => (
  <motion.a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mb-8 flex flex-wrap lg:justify-center no-underline"
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}>
    <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
      <motion.img
        src={project.image}
        alt={project.title}
        className="mb-6 rounded w-full max-w-xs lg:max-w-full"
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
    <motion.div
      className="w-full max-w-xl lg:w-3/4 flex flex-col items-center lg:items-start"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginLeft: "30px" }}>
      <h6 className="mb-2 font-semibold">{project.title}</h6>
      <p className="mb-4 text-neutral-400 text-center lg:text-left">
        {project.description}
      </p>
      <div className="flex flex-wrap justify-center lg:justify-start">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="mb-2 mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  </motion.a>
);

const Projects = () => (
  <div className="border-b border-neutral-900 pb-4">
    <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl">
      Projets
    </motion.h2>
    <div>
      {PROJECTS.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  </div>
);

export default Projects;
