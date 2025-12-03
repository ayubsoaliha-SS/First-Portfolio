import React from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'ayubsoaliha125@gmail.com',
      link: 'mailto:ayubsoaliha125@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 8825007252',
      link: 'tel:+918825007252'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/soaliha-ayub-83b06825b?trk=contact-info'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'View GitHub Profile',
      link: 'https://github.com/ayubsoaliha-SS'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-heading">Let's Connect</h3>
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="contact-methods">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="contact-method"
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your Good Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-submit">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;