import React from 'react'
import './Skills.css'

const skillsData = [
  { name: "React", level: "Advanced" },
  { name: "Django", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "HTML5", level: "Advanced" },
  { name: "CSS3", level: "Advanced" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Git & GitHub", level: "Intermediate" },
  { name: "Postman", level: "Intermediate" },
  { name: "Bitbucket/Jira", level: "Beginner" },
  { name: "REST APIs", level: "Intermediate" },
  { name: "PostgreSQL", level: "Beginner" },
  { name: "MySQL", level: "Intermediate" },
  { name: "Python", level: "Advanced" },
  { name: "C/C++", level: "Intermediate" },
  { name: "Java", level: "Beginner" },
  { name: "Bootstrap", level: "Intermediate" },
  { name: "LINUX/UNIX", level: "Intermediate" },
  { name: "Firebase", level: "Beginner" },
  { name: "Excel", level: "Advanced" },
  { name: "Power BI", level: "Beginner" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-subtitle">
          Technologies & tools I use to build modern web applications
        </p>

        <div className="skills-grid">
          {skillsData.map((skill, i) => (
            <div key={i} className="skill-card">
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar">
                <div
                  className={`skill-level ${skill.level.toLowerCase()}`}
                ></div>
              </div>
              <span className="skill-level-text">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
