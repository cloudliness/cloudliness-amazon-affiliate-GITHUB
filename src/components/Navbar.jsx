import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const closeNavbar = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  };

  const handleNavClick = () => {
    closeNavbar();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleNavClick}>
          <img 
            src="/images/cloudliness.png" 
            alt="CloudLiness logo"
            className="me-2"
            style={{ width: '50px', height: '50px' }}
          />
          CloudLiness
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <div className="navbar-toggler-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavClick}>
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Products
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/products" onClick={handleNavClick}>
                    All Products
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/harddrives" onClick={handleNavClick}>
                    Hard Drives
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={handleNavClick}>
                Services
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Support
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/faq" onClick={handleNavClick}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/articles" onClick={handleNavClick}>
                    Articles
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/product-reviews" onClick={handleNavClick}>
                    Product Reviews
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
