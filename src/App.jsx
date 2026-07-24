import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'  
import HeroSection from './components/HeroSection/HeroSection.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Experience from './components/Experience/Experience.jsx'
import Contact from './components/Contact/Contact.jsx'
import Education from './components/Education/Education.jsx'
import CourseWork from './components/CourseWork/CourseWork.jsx'
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <Navbar toggleDark={toggleDark} darkMode={darkMode} />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <CourseWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App