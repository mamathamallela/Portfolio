// Skills.js
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Style.css';

const skills = [
  { name: 'JavaScript', level: 85 },
  { name: 'SQL', level: 75 },
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'React.js', level: 85 },
  { name: 'Redux', level: 70 },
  { name: 'Node.js', level: 80 },
  { name: 'Express.js', level: 75 },
  { name: 'Socket.IO', level: 70 },
  { name: 'MySQL', level: 75 },
  { name: 'MongoDB', level: 70 },
  { name: 'VS Code', level: 95 },
  { name: 'GitHub', level: 90 },
  { name: 'Postman', level: 85 },
  { name: 'MySQL Workbench', level: 75 },
  { name: 'MongoDB Compass', level: 75 },
];

export default function Skills() {
  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedLevels((prevLevels) =>
        prevLevels.map((level, index) => {
          const target = skills[index].level;
          if (level < target) {
            return level + 1;
          } else {
            return level;
          }
        })
      );
    }, 20); // adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-graph-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-circle">
            <CircularProgressbar
              value={animatedLevels[index]}
              text={`${animatedLevels[index]}%`}
              styles={buildStyles({
                pathColor: `#0073b1`,
                textColor: '#333',
                trailColor: '#eee',
                textSize: '22px',
                pathTransitionDuration: 0.5,
              })}
            />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
