import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Button, Carousel, Modal, Form } from 'react-bootstrap';
import { products } from '../seed.js';
import './HardDrives.css';

const HardDrives = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [zoomLevel, setZoomLevel] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Filter states
  const [capacityFilter, setCapacityFilter] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [brandFilter, setBrandFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique brands for filter dropdown
  const brands = useMemo(() => {
    const uniqueBrands = [...new Set(products.map(product => product.brand))];
    return ['all', ...uniqueBrands];
  }, []);

  // Get unique capacities for filter dropdown
  const capacities = useMemo(() => {
    const uniqueCapacities = [...new Set(products.map(product => product.capacity))];
    return ['all', ...uniqueCapacities];
  }, []);

  // Filter products based on all criteria
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Capacity filter
      if (capacityFilter !== 'all' && product.capacity !== Number(capacityFilter)) {
        return false;
      }

      // Price range filter
      if (priceRange.min && product.price < priceRange.min * 100) {
        return false;
      }
      if (priceRange.max && product.price > priceRange.max * 100) {
        return false;
      }

      // Brand filter
      if (brandFilter !== 'all' && product.brand !== brandFilter) {
        return false;
      }

      // Search query (case-insensitive)
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [capacityFilter, priceRange, brandFilter, searchQuery]);

  const openModal = (images) => {
    setModalImages(images);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleDescription = (id) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getPreviewText = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent;
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
  };

  return (
    <Container className="my-5">
      <h1 className="products-heading mb-4">External Hard Drives</h1>
      
      {/* Filters Section */}
      <Card className="mb-4 filter-card">
        <Card.Body>
          <Row className="g-3">
            <Col md={3}>
              <Form.Group>
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
            
            <Col md={3}>
              <Form.Group>
                <Form.Label>Storage Capacity</Form.Label>
                <Form.Select
                  value={capacityFilter}
                  onChange={(e) => setCapacityFilter(e.target.value)}
                >
                  <option value="all">All Sizes</option>
                  {capacities.filter(cap => cap !== 'all').map(cap => (
                    <option key={cap} value={cap}>{cap}TB</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            
            <Col md={3}>
              <Form.Group>
                <Form.Label>Brand</Form.Label>
                <Form.Select
                  value={brandFilter}
                  onChange={(e) => setBrandFilter(e.target.value)}
                >
                  <option value="all">All Brands</option>
                  {brands.filter(brand => brand !== 'all').map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            
            <Col md={3}>
              <Form.Group>
                <Form.Label>Price Range ($)</Form.Label>
                <div className="d-flex gap-2">
                  <Form.Control
                    type="number"
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                  />
                  <Form.Control
                    type="number"
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Products Grid */}
      <Row className="g-4">
        {filteredProducts.map(product => (
          <Col xs={12} key={product.id}>
            <Card className="product-card">
              <div className="product-image-section">
                <span className="paid-link-badge">Paid Link</span>
                <div onClick={() => openModal(product.images)} style={{ cursor: 'pointer' }}>
                  <Carousel interval={null} indicators={false} controls={false}>
                    {product.images.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className="d-block w-100"
                          src={product.images[index]}
                          alt={`${product.name} - Image ${index + 1}`}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </div>
              <div className="product-info-section">
                <div>
                  <div className="product-brand">{product.brand}</div>
                  <div className={`card-content ${expandedDescriptions[product.id] ? 'expanded' : ''}`}>
                    <div className="product-title-preview">{product.name}</div>
                    {expandedDescriptions[product.id] && (
                      <div className="product-description"
                        dangerouslySetInnerHTML={{ 
                          __html: product.description
                        }} 
                      />
                    )}
                  </div>
                </div>
                <div className="product-actions">
                  <div className="price-section">
                    <div className="price-tag">${(product.price / 100).toFixed(2)}</div>
                    <div className="price-may-vary">Price may vary</div>
                  </div>
                  <div className="button-group">
                    <button
                      onClick={() => toggleDescription(product.id)}
                      className="read-more-button"
                    >
                      {expandedDescriptions[product.id] ? 'Show Less' : 'Read More'}
                    </button>
                    <Button
                      variant="primary"
                      as="a"
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="buy-now-button"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-5">
          <h3>No products match your filters</h3>
          <p>Try adjusting your search criteria</p>
        </div>
      )}

      {/* Image Modal */}
      <Modal show={modalVisible} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Product Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel interval={null} indicators={true} className="custom-carousel">
            {modalImages.map((image, index) => (
              <Carousel.Item key={index}>
                <div className="carousel-navigation-wrapper">
                  <div 
                    className="zoom-container"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setMousePosition({
                        x: ((e.clientX - rect.left) / rect.width) * 100,
                        y: ((e.clientY - rect.top) / rect.height) * 100
                      });
                    }}
                    onMouseEnter={() => setZoomLevel(2)}
                    onMouseLeave={() => setZoomLevel(1)}
                  >
                    <img
                      className="d-block w-100 zoomable-image"
                      src={image}
                      alt={`Product Image ${index + 1}`}
                      style={{
                        maxHeight: '600px',
                        objectFit: 'contain',
                        transform: `scale(${zoomLevel})`,
                        transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                        transition: zoomLevel === 1 ? 'transform 0.2s ease-out' : 'none'
                      }}
                    />
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default HardDrives;
