import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Success from './components/Success';
import Cancel from './components/Cancel';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Articles from './components/Articles';
import ProductReviews from './components/ProductReviews';
import HardDrives from './components/HardDrives';
import Products from './components/Products';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div className="content" style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/harddrives" element={<HardDrives />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Navigate to="/faq" replace />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/product-reviews" element={<ProductReviews />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
