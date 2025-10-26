import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  const projects = [
    { title: "Todo App", description: "A simple React app to manage tasks.", link: "#" },
    { title: "Weather App", description: "An app showing live weather info.", link: "#" },
    { title: "Portfolio Site", description: "My personal portfolio built with React.", link: "#" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
