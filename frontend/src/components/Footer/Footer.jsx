import React from "react";
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Projects Section */}
        <div className="footer-section">
          <h4>OUR PROJECT</h4>
          <ul className="footer-list">
            <li>Treasure Garden</li>
            <li>Nandgude Sonai Paradise</li>
            <li>Ashoka Commercial Hub</li>
            <li>Sai Siddhi Builders</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>CONTACT US</h4>
          <p className="address" >Baner Road, Valkan Society, Rakshak Society, Pimple Nilakh, Pune, Pimpri-Chinchwad, Maharashtra 411027</p>
          <p><a href="tel:+917219454419">+91 7219454419</a></p>
          <p><a href="mailto:handesantosh05@gmail.com">handesantosh05@gmail.com</a></p>
        </div>

        {/* Join with Us */}
        <div className="footer-section">
          <h4>JOIN WITH US</h4>
          <ul className="social-list">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="https://threads.net" target="_blank" rel="noopener noreferrer">Threads</a></li>
          </ul>
        </div>
        
      </div>
      <div className="footer-bottom-bar">
      <p className="tag">WE BUILD TOMMORROW</p>
        <p>
          &copy; {new Date().getFullYear()} Design & Develop by <a href="#">Shri Swami Samartha Developers</a>, All Rights Reserved. 
          <a href="/terms">Terms and Condition</a> | <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
