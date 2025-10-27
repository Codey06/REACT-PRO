import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css'

export default function App() {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    } else {
      document.body.className = theme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme); // save preference
  };

  return (
    <>
      <Header onToggleTheme={toggleTheme} currentTheme={theme} />
      <Hero />
      <About />
      <Skill />        {/* ✅ Skills section ka muuqda About ka dib */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
