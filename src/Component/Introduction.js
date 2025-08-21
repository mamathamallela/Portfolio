import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import Education from './Education';
import Projects from './Project';
import Skills from './Skill';
import Experience from './Experience';
import Contact from './Contact';
import './Style.css';

const Introduction = () => {
  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="typing-text">
              <Typewriter
                words={[
                  "Hi, I'm Mamatha Mallela, Full Stack Developer"
                ]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>

           <p className="intro-para">
  I’m Mamatha Mallela, a passionate Full Stack Developer specializing in building robust, scalable web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
    With 2.8 years of experience, I craft clean, responsive designs and efficient backend systems that deliver smooth user experiences. From concept to deployment, I love solving complex problems and bringing ideas to life with modern, maintainable code.
    My focus is on delivering high-quality solutions, collaborating effectively with teams, and staying up-to-date with the latest web technologies to build digital products that make an impact.
</p>


            {/* Download CV Button with Tilt */}
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
              <a
                href="/Full Stack mamatha_resume.pdf"
                download
                className="download-btn"
              >
                📄 Download CV
              </a>
            </Tilt>

            {/* Social Media Links with Tilt */}
            <div className="social-links">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.1}>
                <a
                  href="https://www.linkedin.com/in/mamatha-mallela-45759635a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src="/linkedin.png" alt="LinkedIn" />
                </a>
              </Tilt>

              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.1}>
                <a
                  href="https://github.com/mamathamallela"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <img src="/github.jpg" alt="GitHub" />
                </a>
              </Tilt>

              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.1}>
                <a
                  href="https://www.instagram.com/your-instagram-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img src="/instagram.png" alt="Instagram" />
                </a>
              </Tilt>

              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.1}>
                <a
                  href="https://twitter.com/your-twitter-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <img src="/twitter.png" alt="Twitter" />
                </a>
              </Tilt>
            </div>
          </div>

          <div className="hero-image">
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
              <div className="image-wrapper">
                <img src="/img.png" alt="Mamatha Mallela" />
              </div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* Other sections */}
      <section id="education">
        <Education />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Introduction;
