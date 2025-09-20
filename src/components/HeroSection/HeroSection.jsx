import React from 'react'
import './HeroSection.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        
        {/* Intro */}
        <h2 className="hero-subtitle">Hi, I'm</h2>
        <h1 className="hero-title">Mahima B Mahesh</h1>
        <h3 className="hero-role">Full Stack Developer (Django + React)</h3>

        {/* Description */}
        <p className="hero-text">
          I build modern, scalable web applications with elegant frontends and
          robust backends. Passionate about problem-solving, clean code, and
          creating impactful digital experiences.
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
