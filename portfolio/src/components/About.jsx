import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm <strong>Mustaf Ahmed</strong>, a passionate frontend developer
            who loves creating clean, interactive, and responsive web
            interfaces. I focus on learning modern technologies like
            <strong> React</strong>, <strong>Next.js</strong>, and smooth
            animation tools such as <strong>Framer Motion</strong>.
          </p>
          <p>
            My goal is to turn creative ideas into real, functional digital
            experiences. I’m constantly learning and improving every day.
          </p>
        </div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="images/profile.jpg"
            alt="Mustaf Ahmed"
            className="profile-pic"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
