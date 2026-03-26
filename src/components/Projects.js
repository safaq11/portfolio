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
            <a href="https://github.com/safaq11" className="btn-project" target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>

          {/* Sample Project */}
          <div className="project-card">
            <img
              src="https://images.pexels.com/photos/34866269/pexels-photo-34866269.jpeg"
              alt="Sample Project"
              style={{ width: '200px', height: '200px' }}
              className="project-img"
            />
            <h3>Pet website</h3>
            <p>
              A pet website using HTML and CSS to showcase skills and projects.
            </p>
            <a href="https://github.com/safaq11/portfolio" className="btn-project" target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;