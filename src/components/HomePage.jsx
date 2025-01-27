import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home-page">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Cloudliness</h1>
          <p className="hero-subtitle">Your trusted source for cloud storage solutions and expert guidance</p>
          <Link to="/products" className="hero-button" onClick={scrollToTop}>Explore Products</Link>
        </div>
      </div>
      {/* other homepage content goes here */}
    </div>
  );
}

export default HomePage;
