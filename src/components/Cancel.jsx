import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Alert, Button } from 'react-bootstrap';
import { XCircleFill } from 'react-bootstrap-icons';
import './Cancel.css';

const Cancel = () => {
  const navigate = useNavigate();

  const handleReturnToServices = () => {
    navigate('/services');
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div className="text-center">
        <XCircleFill className="text-danger mb-4" size={64} />
        <Alert variant="warning" className="mb-4">
          <Alert.Heading>Payment Cancelled</Alert.Heading>
          <p className="mb-0">
            Your payment was cancelled. If you experienced any issues or have questions, 
            please don't hesitate to contact us.
          </p>
        </Alert>
        <Button 
          variant="primary" 
          onClick={handleReturnToServices}
          className="mt-3"
        >
          Return to Services
        </Button>
      </div>
    </Container>
  );
};

export default Cancel;
