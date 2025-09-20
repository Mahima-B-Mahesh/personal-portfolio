import React from 'react'
import './Projects.css'

const projectsData = [
  {
    title: "Noteify",
    tech: "React (Frontend) + Django (Backend) | Authenticated",
    description: "A note-making application with authentication allowing users to create, edit, and manage their personal notes securely.",
  },
  {
    title: "Netflix Clone",
    tech: "React + Firebase Authentication",
    description: "A Netflix clone with authenticated user login and dynamic movie/series browsing features.",
  },
  {
    title: "PageWise",
    tech: "Django (Authenticated)",
    description: "A book review application with user authentication, enabling users to add reviews and ratings for books.",
  },
  {
    title: "VITAFIT",
    tech: "Django | Fitness Web Application",
    description: "Developed a fitness tracking web app enabling users to monitor workouts, nutrition, and progress metrics.",
    duration: "Apr 2025 – May 2025",
    location: "Trivandrum",
  },
  {
    title: "EDUCRM",
    tech: "Django | CRM Web Application",
    description: "CRM application for managing student interactions, class video access, and Razorpay-based payments. Includes secure login, admin interfaces, and dedicated sections for trainers and counselors.",
    duration: "Jan 2025 – Mar 2025",
    location: "Trivandrum",
  },
  {
    title: "Svasthya",
    tech: "Flutter + Firebase | Android App",
    description: "Created a health-tracking Android application for monitoring user health metrics.",
    duration: "Jan 2022 – May 2022",
    location: "Trivandrum",
  },
  {
    title: "HealthyMe",
    tech: "PHP + AngularJS | Client-Server Project",
    description: "Website connecting healthcare facilities to common people, with a PHP backend and AngularJS frontend.",
    duration: "Jan 2020 – May 2020",
    location: "Trivandrum",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">
          A showcase of my work in web and mobile applications.
        </p>

        <div className="projects-grid">
          {projectsData.map((project, i) => (
            <div key={i} className="project-card">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
              {project.duration && (
                <p className="project-duration-location">
                  {project.duration} | {project.location}
                </p>
              )}
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
