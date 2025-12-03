import React from 'react';
import { Code, Laptop, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Full-Stack Developer',
      description: 'Expertise in both frontend and backend development'
    },
    {
      icon: <Laptop size={32} />,
      title: 'Modern Technologies',
      description: 'Working with the latest tools and frameworks'
    },
    {
      icon: <Zap size={32} />,
      title: 'Quick Learner',
      description: 'Always eager to learn and adapt to new technologies'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-heading">Introduction</h3>
            <p className="about-description">
              I'm <strong>Soaliha Ayub</strong>, a passionate Full Stack Developer with expertise in JavaScript, 
              React, Node.js, and Express, along with experience in working with modern tools like Redux and MongoDB. 
              I love building scalable, user-friendly applications and enjoy solving real-world problems with 
              clean, efficient code.
            </p>
            <p className="about-description">
              I'm a quick learner and always eager to collaborate on exciting projects that bring ideas to life. 
              With a strong foundation in both frontend and backend development, I strive to create seamless 
              digital experiences that make a difference.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h4 className="highlight-title">{item.title}</h4>
                <p className="highlight-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;