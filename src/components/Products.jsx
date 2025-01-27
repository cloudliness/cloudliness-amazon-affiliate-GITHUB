import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css';
import products from '../config/products';


function Products() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Browse Our Product Categories and Services</h1>
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Hard Drives</Card.Title>
              <Card.Text>
                Explore our selection of high-quality hard drives for your storage needs. 
                We offer a range of desktop and NAS drives from trusted brands like Western Digital and Seagate.
              </Card.Text>
              <div className="mt-auto">
                <Link to="/harddrives" className="btn btn-primary" onClick={scrollToTop}>View Hard Drives</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Services</Card.Title>
              <Card.Text>
              <p>Our services include installing Docker and Nextcloud to create your own private data storage solution, similar to cloud services but with complete control. After installation, you will have access to your data from anywhere in the world. We provide consultation on using the software.</p>
              </Card.Text>
              <div className="mt-auto">
                <Link to="/services" className="btn btn-primary" onClick={scrollToTop}>View Services</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
