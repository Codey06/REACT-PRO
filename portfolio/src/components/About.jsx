import React from 'react'
import "./About.css"
const About = () => {
  return (
   <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-img"
        />
        <div className="about-text">
          <p>
            My name is <strong>Mustaf Ahmed</strong>. I’m a beginner frontend developer 
            passionate about creating user-friendly websites with React.
          </p>
          <p>
            I enjoy learning new technologies, improving my coding skills, and building 
            small projects that challenge me to grow as a developer.
          </p>
          <p>
            When I’m not coding, I love exploring tech tutorials and working on personal projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
