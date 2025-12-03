import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with React, Node.js, Express, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe'],
      github: '',
      demo: ''
    },
    {
      title: 'Task Management App',
      description: 'A productivity tool for managing tasks and projects with drag-and-drop functionality, real-time updates, and team collaboration features. Includes task prioritization and deadline tracking.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Material-UI'],
      github: '',
      demo: ''
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for tracking social media metrics across multiple platforms. Features data visualization, real-time analytics, and customizable reports with interactive charts.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'Express', 'Chart.js', 'REST API'],
      github: '',
      demo: ''
    },
    {
      title: 'Recipe Finder Application',
      description: 'A food discovery app that helps users find recipes based on ingredients, dietary preferences, and cuisine types. Includes step-by-step cooking instructions and nutritional information.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'API Integration'],
      github: '',
      demo: ''
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Showcasing my skills and experience through real-world projects
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600/10b981/ffffff?text=' + project.title;
                  }}
                />
                <div className="project-overlay">
                  <div className="project-buttons">
                    <a
                      href={project.github || '#'}
                      className="project-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Repository"
                    >
                      <Github size={20} />
                      GitHub
                    </a>
                    <a
                      href={project.demo || '#'}
                      className="project-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;