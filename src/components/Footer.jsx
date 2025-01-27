import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>CloudLiness provides expert IT solutions and Amazon product recommendations to enhance your tech experience.</p>
        </div>
        
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
            <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul>
            {/* <li><FaPhone /> <span>(555) 123-4567</span></li> */}
            <li>
              <a href="mailto:test@test.com" className="footer-link">
                <FaEnvelope /> test@test.com
              </a>
            </li>
            {/* <li><FaMapMarkerAlt /> <span>Silicon Valley, CA</span></li> */}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Connect With Us</h3>
          <div className="footer-social">
            {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a> */}
            {/* <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a> */}
            <a href="social links" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="amazon-disclosure">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} CloudLiness. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
