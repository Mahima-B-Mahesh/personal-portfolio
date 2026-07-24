import React from 'react'
import './HeroSection.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        
        {/* Intro */}
        <h2 className="hero-subtitle">Hi, I'm</h2>
        <h1 className="hero-title">Mahima B Mahesh</h1>
        <h3 className="hero-role">Software Developer · React Native & React.js</h3>

        {/* Description */}
        <p className="hero-text">
          Specializing in building high-performance, scalable cross-platform mobile
          applications for Android and iOS. Passionate about clean code, intuitive
          user experiences, and turning ideas into impactful digital products.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
