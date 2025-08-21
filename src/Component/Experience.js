// Experience.js
import React from 'react';
import './Style.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>Professional Experience</h2>

      <div className="experience-card">
        <h3>Software Engineer</h3>
        <h4>BrightCom Group | Hyderabad</h4>
        <span className="experience-duration">Nov 2022 – Present</span>
        <ul>
          <li>Developed and deployed a comprehensive employee management web application with a user-friendly interface, boosting productivity and efficiency.</li>
          <li>Implemented role-based access control (RBAC) with JWT login for secure access by USER, HR, IT, and ADMIN roles.</li>
          <li>Enabled efficient CRUD operations and seamless frontend-backend integration.</li>
          <li>Used Nodemailer for OTP verification emails, greetings, leave approvals, and announcements.</li>
          <li>Provided key features like attendance tracking, leave management, payslip access, and data visualization with charts.</li>
          <li>Built robust admin controls for managing employees, access, company groups, and reporting structures.</li>
          <li>Automated attendance tracking by processing uploaded Excel files for status and compensation calculations.</li>
          <li>Collaborated in an agile team with sprint planning, daily stand-ups, and retrospectives to deliver on-time results.</li>
        </ul>

        <h3>Full Stack Developer Projects</h3>

        {/* <div className="project-block">
          <h4>Library Management System</h4>
          <span className="experience-duration">Jan 2022 – June 2022</span>
          <ul>
            <li>Designed and developed a full-stack library management system using React, Node.js, Express.js, and MongoDB.</li>
            <li>Implemented JWT-based authentication, multilingual support, and secure file storage with Firebase.</li>
            <li>Built user-friendly admin dashboards for book inventory, lending, and return workflows.</li>
            <li>Streamlined daily operations for librarians and improved book tracking accuracy.</li>
          </ul>
        </div> */}

        <div className="project-block">
          <h4>Tourism Management System</h4>
          <span className="experience-duration">Aug 2021 – Dec 2021</span>
          <ul>
            <li>Developed a complete tourism booking platform using React, Node.js, and MongoDB.</li>
            <li>Created secure user authentication for travelers and admins with JWT and session management.</li>
            <li>Integrated payment gateway for online bookings and real-time itinerary updates.</li>
            <li>Built admin dashboards to manage packages, bookings, and customer feedback efficiently.</li>
            <li>Ensured responsive design for seamless mobile and desktop use.</li>
          </ul>
        </div>

        <div className="project-block">
          <h4>Digital Examination Website</h4>
          <span className="experience-duration">Jan 2021 – July 2021</span>
          <ul>
            <li>Created an online examination platform with React.js for frontend and Node.js/Express for backend.</li>
            <li>Developed modules for question banks, automatic grading, and student performance analytics.</li>
            <li>Enabled secure student login, timer-based exams, and result publishing with admin controls.</li>
            <li>Designed a clean, user-friendly UI for students and instructors to manage exams and results.</li>
          </ul>
        </div>

        {/* <div className="project-block">
          <h4>School Management System</h4>
          <span className="experience-duration">Aug 2020 – Dec 2020</span>
          <ul>
            <li>Built a web-based school management portal with React, Node.js, Express, and MongoDB.</li>
            <li>Developed modules for student admissions, attendance tracking, grades, and parent communications.</li>
            <li>Implemented role-based access for students, teachers, and administrators.</li>
            <li>Designed responsive dashboards for real-time updates on class schedules and announcements.</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
