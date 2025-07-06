import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {/* Pet Project */}
          <div className="project-card">
            <img
              src="https://images.pexels.com/photos/18078943/pexels-photo-18078943.jpeg"
              alt="Kiddo Band"
              style={{ width: '200px', height: '200px' }}
              className="project-img"
            />
            <h3>Kiddo Band</h3>
            <p>
              A wearable device for kids that sends SOS alerts, tracks vitals, and notifies parents when the child is hurt.
            </p>
            <a href="#" className="btn-project" target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>

          {/* Sample Project */}
          <div className="project-card">
            <img
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
              alt="Sample Project"
              style={{ width: '200px', height: '200px' }}
              className="project-img"
            />
            <h3>Pet Project</h3>
            <p>
              A responsive Pet website using HTML and CSS to showcase skills and projects.
            </p>
            <a href="#" className="btn-project" target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;