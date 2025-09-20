import React from 'react'
import './Experience.css'

const experienceData = [
  {
    company: "Sporthood",
    role: "Python Django Developer Intern",
    duration: "May 2025 - Present",
    location: "Trivandrum",
    responsibilities: [
      "Collaborated with cross-functional teams to build and maintain company websites using Django REST Framework and React.js.",
      "Developed React Native mobile applications for internal and client-facing use.",
      "Assisted in code reviews and maintained project documentation."
    ]
  },
  {
    company: "Luminar Technolab",
    role: "Python Django Developer Intern",
    duration: "Nov 2024 - May 2025",
    location: "Trivandrum",
    responsibilities: [
      "Worked as a Python Django full-stack developer intern, developing 3 projects using Django, Django REST Framework, and React.",
      "Implemented backend APIs and integrated frontend components.",
      "Collaborated with senior developers to optimize code and ensure best practices."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <p className="experience-subtitle">
          My professional journey and contributions to various projects
        </p>

        <div className="experience-list">
          {experienceData.map((exp, i) => (
            <div key={i} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                <span className="experience-company">{exp.company}</span>
              </div>
              <div className="experience-duration-location">
                {exp.duration} | {exp.location}
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
