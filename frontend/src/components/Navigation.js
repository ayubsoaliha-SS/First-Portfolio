import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Soaliha-Ayub-Resume.pdf';
    link.download = 'Soaliha-Ayub-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">SA</span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
          <button className="nav-resume-btn" onClick={handleResumeDownload}>
            Resume
          </button>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;