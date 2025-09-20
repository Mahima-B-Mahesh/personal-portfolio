import React from 'react';
import './CourseWork.css';

const courseworkData = [
  { name: "Data Structures", level: 90 },
  { name: "Analysis of Algorithms", level: 90 },
  { name: "Probability and Statistics", level: 85 },
  { name: "Computer Networks", level: 75 },
  { name: "Operating Systems", level: 80 },
  { name: "DBMS", level: 90 },
  { name: "OOPs", level: 90 },
  { name: "Calculus I-IV", level: 85 },
  { name: "Linear Algebra", level: 85 },
  { name: "Data Analysis", level: 80 },
  { name: "Software Engineering", level: 85 },
  { name: "Web Technologies", level: 90 },
  { name: "Cybersecurity", level: 65 },
  { name: "Compiler Design", level: 70 },
  { name: "Embedded Systems", level: 65 },
  { name: "Digital Logic Design", level: 70 },
  { name: "Microprocessors", level: 60 },
  { name: "Numerical Methods", level: 75 },
  { name: "Graph Theory", level: 80 },
  { name: "Discrete Mathematics", level: 85 },

];

const Coursework = () => {
  return (
    <section id="coursework" className="coursework">
      <div className="coursework-container">
        <h2 className="coursework-title">Coursework & Proficiency</h2>
        <p className="coursework-subtitle">
          Selected courses with an indication of my proficiency
        </p>

        <div className="coursework-grid">
          {courseworkData.map((course, i) => (
            <div key={i} className="course-card">
              <h3 className="course-name">{course.name}</h3>
              <div className="course-bar">
                <div 
                  className="course-progress" 
                  style={{ width: `${course.level}%` }}
                ></div>
              </div>
              <span className="course-level-text">{course.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coursework;
