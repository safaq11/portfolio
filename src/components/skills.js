import React from 'react';
import './skills.css';

function Skills() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React',
    'Bootstrap', 'Git & GitHub', 'Node.js'
  ];

  return (
    <div className="skills-section py-5" id="skills">
      <div className="container text-center">
        <h2 className="section-title mb-4">My Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 mb-4">
              <div className="skill-card">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;