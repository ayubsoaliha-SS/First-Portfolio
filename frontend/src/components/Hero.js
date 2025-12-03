import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Soaliha-Ayub-Resume.pdf';
    link.download = 'Soaliha-Ayub-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">Hello, I'm</div>
          <h1 className="hero-name">Soaliha Ayub</h1>
          <div className="hero-title">Full Stack Developer</div>
          <p className="hero-description">
            Passionate about building modern, scalable web applications with cutting-edge technologies.
            Specialized in React, Node.js, and MongoDB to create seamless user experiences.
          </p>
          <div className="hero-buttons">
            <button className="hero-btn primary" onClick={handleResumeDownload}>
              <Download size={20} />
              Download Resume
            </button>
            <a href="#contact" className="hero-btn secondary">
              Get In Touch
            </a>
          </div>
        </div>

        {/* 🔥 Replaced placeholder with real image */}
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img
              src="/soalihadir -Force
.jpg"       // <--- place your image inside public/ folder
              alt="Soaliha Ayub"
              className="hero-image"
            />
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown className="scroll-icon" size={24} />
      </a>
    </section>
  );
};

export default Hero;
