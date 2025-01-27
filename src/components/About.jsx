import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>Your Trusted Partner in Personal Data Storage Solutions</h1>
        <p className="hero-subtitle">
          We're passionate about data ownership and privacy. From premium hard drives to personal cloud setups, 
          we help you take control of your digital life with secure, self-hosted storage solutions.
        </p>
      </div>

      <div className="about-expertise">
        <h2>Why Choose CloudLiness?</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <i className="fas fa-check-circle"></i>
            <h3>Expert Recommendations</h3>
            <p>We thoroughly test and review every storage solution we recommend, ensuring you get the best value for your investment.</p>
          </div>
          <div className="expertise-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Privacy-First Approach</h3>
            <p>We believe in digital sovereignty. Our solutions prioritize your data privacy and give you complete control over your information.</p>
          </div>
          <div className="expertise-card">
            <i className="fas fa-dollar-sign"></i>
            <h3>Best Value</h3>
            <p>We continuously monitor prices and update our recommendations to ensure you get the best deals on reliable storage solutions.</p>
          </div>
        </div>
      </div>

      <div className="about-personal-cloud">
        <div className="cloud-content">
          <h2>Take Control of Your Data</h2>
          <div className="cloud-features">
            <div className="feature-card">
              <i className="fas fa-cloud"></i>
              <h3>Personal Cloud Setup</h3>
              <p>We specialize in setting up your personal Nextcloud instance - an open-source solution that gives you complete control over your data. Host your files, photos, contacts, and more on your own hardware.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-server"></i>
              <h3>Professional Installation</h3>
              <p>Our IT service includes complete hardware setup, software installation, and configuration of your personal cloud storage system. We ensure everything runs smoothly and securely.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-lock"></i>
              <h3>Data Sovereignty</h3>
              <p>Break free from big tech companies. With our Nextcloud setup, you maintain 100% control over your data while enjoying features similar to popular cloud services.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            CloudLiness was founded with a passion for data privacy and personal cloud storage. As tech enthusiasts 
            who host our own personal data, we understand the importance of having complete control over your digital life.
          </p>
          <p>
            We've experienced firsthand the benefits of self-hosted solutions, and we're here to help others achieve 
            the same level of data independence. Whether you're looking for reliable hard drives for your home server 
            or need help setting up your personal cloud, we provide the expertise and support you need.
          </p>
        </div>
      </div>

      <div className="about-services">
        <h2>What We Offer</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-hdd"></i>
            <h3>Premium Storage Solutions</h3>
            <p>Carefully selected hard drives from industry-leading manufacturers, perfect for both personal and professional use.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-cloud-upload-alt"></i>
            <h3>Nextcloud Setup Service</h3>
            <p>Complete installation and configuration of your personal Nextcloud instance, giving you your own private cloud storage.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-tools"></i>
            <h3>IT Support</h3>
            <p>Professional assistance with hardware installation, software configuration, and ongoing technical support.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-graduation-cap"></i>
            <h3>Knowledge Sharing</h3>
            <p>Learn how to manage and maintain your personal cloud setup with our detailed guides and ongoing support.</p>
          </div>
        </div>
      </div>

      <div className="about-trust">
        <h2>Our Commitment to You</h2>
        <div className="trust-points">
          <div className="trust-point">
            <i className="fas fa-star"></i>
            <h4>Quality Assurance</h4>
            <p>We only recommend products that meet our strict quality standards.</p>
          </div>
          <div className="trust-point">
            <i className="fas fa-user-shield"></i>
            <h4>Privacy Focused</h4>
            <p>Your data privacy and security are our top priorities in every solution we provide.</p>
          </div>
          <div className="trust-point">
            <i className="fas fa-hands-helping"></i>
            <h4>Ongoing Support</h4>
            <p>We're here to help you maintain and optimize your personal cloud storage setup.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
