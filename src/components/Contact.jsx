import React, { useState } from 'react';
import { FaXTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa6';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'your key within these quotes',
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <p className="contact-intro">
        Have questions about personal cloud storage or need help choosing the right hard drive? 
        We're here to help! Send us a message or connect with us on social media.
      </p>

      <div className="contact-content">

      {/* Contact Form */}
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can we help you?"
                rows="5"
              />
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="success-message">Thank you for your message! We'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="error-message">Oops! Something went wrong. Please try again later.</p>
            )}
          </form>
        </div>



      {/* Contact Info */}
        <div className="contact-info-section">
          <div className="info-card">
            <h2>Connect With Us</h2>
            <div className="social-links">
              <a 
                href="social_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaXTwitter /> Follow us on X
              </a>
              <a 
                href="social_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaYoutube /> Subscribe on YouTube
              </a>
              <a 
                href="mailto:test@test.com"
                className="social-link"
              >
                <FaEnvelope /> test@test.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
