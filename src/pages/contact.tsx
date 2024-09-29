import React from 'react';
import '../App.css'
import './contact.css';

const Contact: React.FC = () =>
{
  return (
    <div className='contact-info-container'>
      <div className='contact-info'>
        <h1>Contact Me</h1>

        <div className="profile-pic-container">
          <img src="images/pfp.png" alt=" Profile Picture" className="profile-pic" />
        </div>

        <p className="introduction">
          Hi! I'm <strong>Tati</strong>, but on the internet, people know me as <strong>Pixi</strong>. I'm a developer and a bit of a nerd who loves coding and building cool stuff!
        </p>

        <p>Find me on:</p>
        <div className="social-links">
          <a href="https://github.com/your-github-username" target="_blank">
            <i className="fab fa-github fa-3x"></i>
          </a>
          <a href="https://linkedin.com/in/your-linkedin-username" target="_blank">
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="https://discord.com/your-discord-link" target="_blank">
            <i className="fab fa-discord fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;