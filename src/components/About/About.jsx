import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        {/* Left Side - Image */}
        <div className="about-image">
          <img 
            src={`personal-portfolio/assets/profile-pic.jpeg`} 
            alt="Mahima B Mahesh" 
          />
        </div>

        {/* Right Side - Text */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I’m <span className="highlight">Mahima B Mahesh</span>, a passionate 
            <span className="highlight"> Full Stack Web Developer </span> 
            specialized in building scalable, responsive, and user-friendly applications.  
            With expertise in <span className="highlight">Django</span> and 
            <span className="highlight"> React</span>, I love crafting seamless 
            frontend experiences backed by robust backend solutions.
          </p>
          <p className="about-text">
            Beyond coding, I enjoy problem-solving, contributing to open-source, and 
            constantly learning new technologies to stay ahead in the fast-evolving tech world.
          </p>

          <div className="about-buttons">
            <a href="#skills" className="btn primary">My Skills</a>
            <a href="#contact" className="btn secondary">Hire Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
