import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Framer Motion.",
    image: "images/project1.jpg",
    link: "#",
  },
  {
    title: "E-Commerce UI",
    description: "Responsive shopping interface built using React Hooks.",
    image: "images/project2.jpg",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "Dynamic blog layout powered by Next.js and Markdown.",
    image: "images/project3.jpg",
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
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} />
              {/* ✅ Overlay div for hover effect */}
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>

            <div className="project-content">
              <a
                href={project.link}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
