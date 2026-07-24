import React from 'react'
import './About.css'
import profilePic from "../../assets/profile-pic.jpeg";


const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        {/* Left Side - Image */}
        <div className="about-image">
          <img 
            src={profilePic} 
            alt="Mahima B Mahesh" 
          />
        </div>

        {/* Right Side - Text */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I’m <span className="highlight">Mahima B Mahesh</span>, a passionate
            <span className="highlight"> Software Developer</span> specializing in
            <span className="highlight"> React Native</span> with experience in building
            high-performance, scalable, and user-friendly cross-platform mobile applications
            for Android and iOS. I enjoy transforming ideas into intuitive digital experiences
            through clean, maintainable, and efficient code.
          </p>
          <p className="about-text">
            Along with React Native, I have hands-on experience in
            <span className="highlight"> React.js</span>,
            <span className="highlight"> Python</span>, and
            <span className="highlight"> Django</span>, enabling me to contribute across
            both frontend and backend development. My expertise includes developing responsive
            user interfaces, integrating REST APIs, implementing authentication, managing
            application state, optimizing performance, and working with databases to build
            reliable software solutions.
          </p>
          <p className="about-text">
            I believe great software is built by combining technical excellence with a strong
            focus on user experience. I enjoy solving complex problems, collaborating with teams,
            learning modern technologies, and continuously improving my skills to build
            applications that make a meaningful impact.
          </p>
          <p className="about-text">
            When I’m not coding, I explore emerging technologies, work on personal projects,
            and stay updated with the latest trends in mobile and web development. I’m always
            excited to take on new challenges and contribute to innovative products that create
            real value.
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
