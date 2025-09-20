import React from 'react';
import './CourseWork.css';

const courseworkData = [
  { name: "Data Structures", level: 90 },
  { name: "Analysis of Algorithms", level: 85 },
  { name: "Probability and Statistics", level: 80 },
  { name: "Computer Networks", level: 75 },
  { name: "Operating Systems", level: 80 },
  { name: "DBMS", level: 85 },
  { name: "OOPs", level: 90 },
  { name: "Calculus I-IV", level: 70 },
  { name: "Linear Algebra", level: 75 },
  { name: "Data Analysis", level: 80 }
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
