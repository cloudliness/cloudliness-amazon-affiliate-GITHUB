import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  const [loadingStates, setLoadingStates] = useState({
    installation: false,
    monthly: false
  });
  const [error, setError] = useState(null);

  const handlePurchase = async (e, type) => {
    e.preventDefault();
    console.log(`Starting ${type} purchase process...`);
    setLoadingStates(prev => ({ ...prev, [type]: true }));
    setError(null);
    
    try {
      console.log('Loading Stripe...');
      const stripeKey = import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY;
      if (!stripeKey) {
        throw new Error('Stripe publishable key is not configured');
      }
      
      const stripe = await loadStripe(stripeKey);
      if (!stripe) {
        throw new Error('Failed to initialize Stripe');
      }
      console.log('Stripe loaded successfully');

      const priceIds = {
        installation: 'price_1QimvjEoZZUwOOCpiITjFbQt',
        monthly: 'price_1QimxJEoZZUwOOCpsMVVDXDl'
      };

      if (!priceIds[type]) {
        throw new Error(`Invalid price type: ${type}`);
      }

      const lineItems = [{
        price: priceIds[type],
        quantity: 1,
      }];

      console.log('Preparing checkout configuration...');
      
      // Get the full URL of the current page
      const currentUrl = window.location.href;
      // Extract the base URL (everything before the hash)
      const baseUrl = currentUrl.split('#')[0];
      console.log('Base URL:', baseUrl);
      
      // Remove any trailing slashes
      const cleanBaseUrl = baseUrl.replace(/\/+$/, '');
      
      // Create URLs with hash routes
      const successUrl = `${cleanBaseUrl}#/success?session_id={CHECKOUT_SESSION_ID}`;
      const cancelUrl = `${cleanBaseUrl}#/cancel`;
      
      console.log('Success URL will be:', successUrl);
      console.log('Cancel URL will be:', cancelUrl);
      
      const checkoutConfig = {
        lineItems,
        mode: type === 'monthly' ? 'subscription' : 'payment',
        successUrl,
        cancelUrl,
        billingAddressCollection: 'required',
        submitType: 'pay'
      };
      
      console.log('Redirecting to checkout...', checkoutConfig);
      const { error: stripeError } = await stripe.redirectToCheckout(checkoutConfig);
      
      if (stripeError) {
        console.error('Stripe checkout error:', stripeError);
        throw stripeError;
      }
    } catch (err) {
      console.error('Payment processing error:', err);
      setError(`Payment processing failed: ${err.message || 'Please try again.'}`);
    } finally {
      setLoadingStates(prev => ({ ...prev, [type]: false }));
    }
  };

  const handleInstallationPurchase = (e) => handlePurchase(e, 'installation');
  const handleMonthlyPurchase = (e) => handlePurchase(e, 'monthly');

  return (
    <Container className="my-5 services-container">
      <h1 className="services-heading">Your Personal Cloud Solution</h1>
      <p className="services-subheading">Secure, Private, and Always Available</p>
      
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-sm mb-5 border-0">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <i className="fas fa-cloud feature-icon"></i>
                <Card.Title as="h2" className="mb-4">Transform Your Digital Life with Nextcloud</Card.Title>
              </div>
              
              <p className="lead text-center mb-5">
                Experience the freedom of having your own personal cloud storage solution. I specialize in setting up and maintaining secure Nextcloud installations that give you complete control over your digital life.
              </p>

              <Row className="mb-5">
                <Col md={6}>
                  <div className="mb-4">
                    <h5 className="mb-3">
                      <i className="fas fa-star text-warning me-2"></i>
                      Why Choose Personal Cloud?
                    </h5>
                    <ul className="feature-list">
                      <li><strong>Privacy First:</strong> Your data stays on your hardware</li>
                      <li><strong>Unlimited Storage:</strong> No monthly storage fees</li>
                      <li><strong>Access Anywhere:</strong> Sync across all devices</li>
                      <li><strong>Share Securely:</strong> Control your sharing</li>
                    </ul>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-4">
                    <h5 className="mb-3">
                      <i className="fas fa-shield-alt text-success me-2"></i>
                      Security Features
                    </h5>
                    <ul className="feature-list">
                      <li><strong>Encryption:</strong> End-to-end security</li>
                      <li><strong>2FA Support:</strong> Extra account protection</li>
                      <li><strong>Regular Updates:</strong> Stay protected</li>
                      <li><strong>Full Backups:</strong> Never lose data</li>
                    </ul>
                  </div>
                </Col>
              </Row>

              {error && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle me-2"></i>
                  {error}
                </div>
              )}

              <Row className="g-4">
                <Col md={6}>
                  <Card className="h-100 pricing-card">
                    <Card.Body className="p-4">
                      <div className="text-center mb-4">
                        <i className="fas fa-rocket feature-icon"></i>
                        <Card.Title>Professional Installation</Card.Title>
                        <div className="mb-4">
                          <span className="display-6">$300</span>
                          <span className="text-muted d-block">One-time payment</span>
                        </div>
                      </div>
                      <ul className="feature-list mb-4">
                        <li><strong>Expert Setup:</strong> Complete installation</li>
                        <li><strong>Training:</strong> 2-hour guided session</li>
                        <li><strong>Migration:</strong> Data transfer included</li>
                        <li><strong>Support:</strong> 30 days included</li>
                      </ul>
                      <div className="button-wrapper">
                        <Button 
                          variant="primary" 
                          onClick={handleInstallationPurchase}
                          disabled={loadingStates.installation}
                          className="w-100"
                        >
                          {loadingStates.installation ? (
                            <><Spinner size="sm" animation="border" /> Processing...</>
                          ) : (
                            'Get Started'
                          )}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="h-100 pricing-card">
                    <Card.Body className="p-4">
                      <div className="text-center mb-4">
                        <i className="fas fa-sync-alt feature-icon"></i>
                        <Card.Title>Monthly Maintenance</Card.Title>
                        <div className="mb-4">
                          <span className="display-6">$25</span>
                          <span className="text-muted d-block">per month</span>
                        </div>
                      </div>
                      <ul className="feature-list mb-4">
                        <li><strong>Updates:</strong> Security & feature updates</li>
                        <li><strong>Monitoring:</strong> 24/7 system monitoring</li>
                        <li><strong>Backups:</strong> Daily automated backups</li>
                        <li><strong>Support:</strong> Priority email support</li>
                      </ul>
                      <div className="button-wrapper">
                        <Button 
                          variant="primary" 
                          onClick={handleMonthlyPurchase}
                          disabled={loadingStates.monthly}
                          className="w-100"
                        >
                          {loadingStates.monthly ? (
                            <><Spinner size="sm" animation="border" /> Processing...</>
                          ) : (
                            'Subscribe Now'
                          )}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
