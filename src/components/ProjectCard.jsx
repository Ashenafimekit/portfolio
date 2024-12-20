import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";

const ProjectCard = ({ imgSrc, title, description, techStack, githubLink, liveLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0.8 }}
      whileHover={{ opacity: 1, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-1 items-center justify-center border border-teal rounded-lg shadow-2xl w-full "
    >
      <div className="h-1/2">
        <img src={imgSrc} alt={title} className="rounded-t-lg" />
      </div>
      <div className="text-start p-3">
        <h1 className="text-sm text-teal">{title}</h1>
        <p className="text-xs text-center text-lighter_gray">{description}</p>
      </div>
      <div className="text-xs flex flex-row items-center justify-center gap-2 text-black font-semibold px-10">
        {techStack.map((tech, index) => (
          <span key={index} className="bg-white rounded-lg p-1 ">
            {tech}
          </span>
        ))}
      </div>
      <div className="text-center flex flex-row gap-3 items-center justify-center py-3">
        {githubLink && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal"
          >
            <GitHubIcon />
          </motion.a>
        )}
        {liveLink && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal"
          >
            <PreviewIcon />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
