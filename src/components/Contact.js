import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-text">
          I'd love to hear from you! Whether it's a collaboration, a project idea, or just a hello, feel free to reach out.
        </p>
        <div className="contact-buttons">
          <a href="mailto:safaqjamal11@gmail.com" className="contact-btn">Email Me</a>
          <a href="https://www.linkedin.com/feed" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="contact-btn">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;