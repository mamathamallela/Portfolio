import React, { useState } from 'react';
import './Style.css';

const projects = [
  {
    title: "Digital Examination Website",
    shortDescription: "A full-stack digital exam platform with Super Admin, Admin, and User roles, exam scheduling, webcam proctoring, and auto scoring.",
    fullDescription: `A full-stack digital examination platform built with React.js, Node.js, and MySQL.
The system includes Super Admin, Admin, and Exam User roles.
The Super Admin manages Admins and monitors exam users with their scores.
Admins can create and publish notifications, upload question papers, and view scores.
Exam writers (users) can register for exams via notifications. Once registered, a unique Gmail invitation is auto-generated containing the exam date, time, and exam link.
When the user clicks the exam link, they see exam instructions and start the test.
The exam includes live webcam proctoring for verification.
Exams are timed and auto-close when time expires.
After submission, scores are automatically calculated and displayed to the user.`,
    image: "/digitalexam.png",
    link: "https://digital-exam-demo.onrender.com"
  },
  {
    title: "TourBuddy (Tourism Website)",
    shortDescription: "A responsive tourism website showing top destinations, local food, maps, and search for all Indian states.",
    fullDescription: `TourBuddy is a responsive tourism website built with React.js, Node.js, and MySQL.
It collects and displays detailed travel information for all Indian states and union territories.
Each state showcases 5 of its best tourist places with descriptions, local food recommendations, and maps.
Users can search for destinations easily and explore food options and maps for better planning.`,
    image: "/tourbuddy.png",
    link: "https://tourism-india.onrender.com"
  }
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
         <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-header">
              <h3>{project.title}</h3>
              <a
                href={project.link}
                className="visit-site-link beside-title"
                target="_blank"
                rel="noopener noreferrer"
              >
                Do You Want See My Project
              </a>
            </div>
            <p>{project.shortDescription}</p>

            {expandedIndex === index && (
              <p className="full-description">{project.fullDescription}</p>
            )}

            <button
              className="project-link"
              onClick={() => toggleExpand(index)}
            >
              {expandedIndex === index ? "Hide Details" : "View Details"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
