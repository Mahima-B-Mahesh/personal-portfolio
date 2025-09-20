import React from 'react'
import './Footer.css'

import { Github, Linkedin, Instagram, Mail, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-logo">
          Mahima<span className="footer-logo-highlight">.Dev</span>
        </h3>
        <p className="footer-tagline">Building modern web experiences with React & Django</p>

        <div className="footer-socials">
          <a href="https://github.com/Mahima-B-Mahesh" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/mahima-b-mahesh-869b481a9" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/mahima_biji_mahesh" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a href="https://leetcode.com/u/Mahima-B-Mahesh/" target="_blank" rel="noopener noreferrer">
            <Code />
          </a>
          <a href="mailto:mahimabmahesh@gmail.com">
            <Mail />
          </a>
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Mahima B Mahesh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
