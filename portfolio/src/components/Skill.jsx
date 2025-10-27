import React from "react";
import "./Skill.css";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "HTML/CSS", level: 95 },
  { name: "Next.js", level: 80 },
  { name: "Framer Motion", level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            className="skill"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="skill-name">
              {skill.name} <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
