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
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Navbar toggleDark={() => setDarkMode(!darkMode)} />
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