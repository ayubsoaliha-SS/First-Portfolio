import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import GitHubStats from './GitHubStats';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubStats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;