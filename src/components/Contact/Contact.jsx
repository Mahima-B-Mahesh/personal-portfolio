import React from 'react'
import './Contact.css'

import { Github, Linkedin, Instagram, Mail, Code } from "lucide-react";

const contactData = [
  { name: "GitHub", url: "https://github.com/Mahima-B-Mahesh", icon: <Github /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mahima-b-mahesh-869b481a9", icon: <Linkedin /> },
  { name: "Instagram", url: "https://www.instagram.com/mahima_biji_mahesh", icon: <Instagram /> },
  { name: "LeetCode", url: "https://leetcode.com/u/Mahima-B-Mahesh/", icon: <Code /> },
  { name: "Email", url: "mailto:mahimabmahesh@gmail.com", icon: <Mail /> },
];

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Feel free to reach out to me through any of the platforms below
        </p>

        <div className="contact-grid">
          {contactData.map((contact, i) => (
            <a 
              key={i} 
              href={contact.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <div className="contact-icon">{contact.icon}</div>
              <span className="contact-name">{contact.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
