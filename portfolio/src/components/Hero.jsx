import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="name">Mustaf Ahmed</span></h1>
        <h2>Frontend Developer & Learner</h2>
        <p>
          I love building clean, modern web interfaces using React.  
          Welcome to my portfolio site!
        </p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  )
}

export default Hero
