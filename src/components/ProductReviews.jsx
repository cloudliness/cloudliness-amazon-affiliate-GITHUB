import React from 'react';

function ProductReviews() {
  return (
    <div className="product-reviews-container" style={{
      padding: '2rem',
      backgroundColor: '#f8f9fa'
    }}>
      <h1 style={{
        marginBottom: '2rem',
        textAlign: 'center'
      }}>Product Reviews</h1>
      <div className="reviews-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        padding: '1rem'
      }}>
        <div className="review-card" style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '1.5rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Seagate BarraCuda 8TB Review</h3>
          <div className="review-rating" style={{ 
            color: '#ffd700',
            fontSize: '1.2rem',
            marginBottom: '1rem'
          }}>★★★★★</div>
          <p className="review-summary" style={{
            color: '#666',
            marginBottom: '1.5rem'
          }}>Excellent performance and reliability for a high-capacity drive. Perfect for media storage and backups.</p>
          <div className="review-pros-cons" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem'
          }}>
            <div className="pros">
              <h4 style={{ 
                color: '#28a745',
                marginBottom: '0.5rem'
              }}>Pros</h4>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>Large capacity</li>
                <li>Reliable performance</li>
                <li>Good value</li>
              </ul>
            </div>
            <div className="cons">
              <h4 style={{ 
                color: '#dc3545',
                marginBottom: '0.5rem'
              }}>Cons</h4>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>5400 RPM speed</li>
                <li>Not for heavy workloads</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="review-card" style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '1.5rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>WD Red Pro 22TB Review</h3>
          <div className="review-rating" style={{ 
            color: '#ffd700',
            fontSize: '1.2rem',
            marginBottom: '1rem'
          }}>★★★★½</div>
          <p className="review-summary" style={{
            color: '#666',
            marginBottom: '1.5rem'
          }}>Professional-grade NAS drive with impressive capacity and performance.</p>
          <div className="review-pros-cons" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem'
          }}>
            <div className="pros">
              <h4 style={{ 
                color: '#28a745',
                marginBottom: '0.5rem'
              }}>Pros</h4>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>Massive capacity</li>
                <li>NAS optimized</li>
                <li>7200 RPM</li>
              </ul>
            </div>
            <div className="cons">
              <h4 style={{ 
                color: '#dc3545',
                marginBottom: '0.5rem'
              }}>Cons</h4>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>Premium price</li>
                <li>Higher power consumption</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReviews;
