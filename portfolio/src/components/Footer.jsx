import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Mustaf Ahmed. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/Codey06" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:mustaf@example.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
