import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Container, 
  Alert, 
  Button, 
  Toast, 
  ToastContainer,
  Offcanvas,
  Spinner,
  Placeholder
} from 'react-bootstrap';
import { CheckCircleFill, InfoCircleFill } from 'react-bootstrap-icons';
import './Success.css';

function Success() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isValidSession, setIsValidSession] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const validateSession = async () => {
      try {
        // Get session ID from the URL
        const query = new URLSearchParams(location.search);
        const sessionId = query.get('session_id');

        if (!sessionId) {
          setToastMessage('No session ID found in URL');
          setShowToast(true);
          return false;
        }

        // Validate session ID format
        const isValidFormat = sessionId.startsWith('cs_test_') || sessionId.startsWith('cs_live_');
        
        if (!isValidFormat) {
          setToastMessage('Invalid session ID format');
          setShowToast(true);
        }

        return isValidFormat;
      } catch (error) {
        setToastMessage(`Error validating session: ${error.message}`);
        setShowToast(true);
        return false;
      }
    };

    const validateAndRedirect = async () => {
      const isValid = await validateSession();
      setIsValidSession(isValid);
      setIsLoading(false);

      if (!isValid) {
        setTimeout(() => navigate('/services'), 2000);
      }
    };

    validateAndRedirect();
  }, [navigate, location]);

  const handleReturnToServices = () => {
    navigate('/services');
  };

  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  if (isLoading) {
    return (
      <Container className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Placeholder as="p" animation="wave" className="mt-3 w-75">
            <Placeholder xs={12} />
          </Placeholder>
        </div>
      </Container>
    );
  }

  if (!isValidSession) {
    return null;
  }

  return (
    <>
      <ToastContainer position="top-end" className="p-3">
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)} 
          delay={5000} 
          autohide
          bg="danger"
        >
          <Toast.Header>
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      <Container className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <CheckCircleFill className="text-success mb-4" size={64} />
          <Alert variant="success" className="mb-4">
            <Alert.Heading>Payment Successful!</Alert.Heading>
            <p>Thank you for choosing our services. Your payment has been processed successfully.</p>
            <hr />
            <p className="mb-0">
              We'll be reaching out shortly with next steps and to get your setup process started.
              If you have any immediate questions, please don't hesitate to contact us.
            </p>
          </Alert>

          <div className="d-grid gap-2">
            <Button 
              variant="primary" 
              onClick={handleReturnToServices}
              size="lg"
            >
              Return to Services
            </Button>
            <Button 
              variant="outline-secondary" 
              onClick={handleShowOffcanvas}
              size="sm"
            >
              <InfoCircleFill className="me-2" />
              More Information
            </Button>
          </div>
        </div>
      </Container>

      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Payment Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            Your payment has been successfully processed. Here's what happens next:
          </p>
          <ul>
            <li>You'll receive a confirmation email</li>
            <li>Our team will contact you within 24 hours</li>
            <li>Setup instructions will be provided</li>
          </ul>
          <p className="text-muted small">
            If you have any questions, please contact our support team.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Success;
