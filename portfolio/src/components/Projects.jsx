import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern and fully responsive personal portfolio built with React, Framer Motion animations, and dark/light theme toggle.",
    link: "#",
  },
  {
    title: "E-Commerce UI",
    description:
      "A shopping interface built with React Hooks and Context API — includes cart, product filters, and smooth UX transitions.",
    link: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A dynamic blog platform powered by Next.js and Markdown. Supports server-side rendering and SEO optimization.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card text-only"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              className="gradient-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
