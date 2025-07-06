import React from 'react';
import './Hero.css';
import profile from '../assets/profile.jpg';
import { Button } from 'react-bootstrap';

function Hero() {
  return (
    <div className="hero-section" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">Safaq Jamal</span></h1>
          <p>A creative frontend developer passionate about building clean & user-friendly websites.</p>
          <div className="hero-buttons">
            <Button variant="warning">View My Work</Button>
            <Button variant="outline-light">Contact Me</Button>
          </div>
        </div>
        <img src={profile} alt="Profile" className="hero-img" />
      </div>
    </div>
  );
}

export default Hero;
