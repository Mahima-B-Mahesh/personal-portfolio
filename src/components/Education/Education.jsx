import React from 'react'
import './Education.css'

const educationData = [
  {
    institution: "University College of Engineering, Karyavattom",
    degree: "Bachelor of Technology in Computer Science",
    year: "2022",
    location: "Trivandrum",
    gpa: "Cumulative GPA: 7.1"
  },
  {
    institution: "Govt. HSS VHS, Anchaleast",
    degree: "Higher Secondary",
    year: "2015-2017",
    location: "Kollam",
    gpa: "Percentage: 94%"
  },
  {
    institution: "Govt. HSS VHS, Anchaleast",
    degree: "High School",
    year: "2013-2015",
    location: "Kollam",
    gpa: "Percentage: 90%"
  }
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <p className="education-subtitle">
          My academic journey and qualifications
        </p>

        <div className="education-list">
          {educationData.map((edu, i) => (
            <div key={i} className="education-card">
              <h3 className="education-degree">{edu.degree}</h3>
              <span className="education-institution">{edu.institution}</span>
              <div className="education-year-location">{edu.year} | {edu.location}</div>
              <p className="education-gpa">{edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
