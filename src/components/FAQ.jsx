import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';

const faqData = [
  {
    question: "What types of hard drives do you recommend?",
    answer: "We recommend different drives based on your specific needs:\n\n" +
           "• For general storage: WD Blue or Seagate BarraCuda drives\n" +
           "• For NAS systems: WD Red or Seagate IronWolf\n" +
           "• For gaming: WD Black or Seagate FireCuda\n" +
           "• For professional use: WD Gold or Seagate Exos"
  },
  {
    question: "How do I choose the right hard drive capacity?",
    answer: "Consider these factors when choosing capacity:\n\n" +
           "• Current storage needs + 50% for future growth\n" +
           "• General use: 2-4TB is common\n" +
           "• Media professionals: 8TB+ recommended\n" +
           "• Data centers: 12TB+ depending on requirements"
  },
  {
    question: "What's the difference between HDD and SSD?",
    answer: "Key differences between HDDs and SSDs:\n\n" +
           "HDDs (Hard Disk Drives):\n" +
           "• More storage for less money\n" +
           "• Slower read/write speeds\n" +
           "• Moving parts make them more vulnerable\n\n" +
           "SSDs (Solid State Drives):\n" +
           "• Faster performance\n" +
           "• More reliable (no moving parts)\n" +
           "• Higher cost per gigabyte"
  },
  {
    question: "How long do hard drives typically last?",
    answer: "Hard drive lifespan varies based on several factors:\n\n" +
           "• Average lifespan: 3-5 years\n" +
           "• Can last longer with proper care\n" +
           "• Factors affecting lifespan:\n" +
           "  - Usage intensity\n" +
           "  - Operating environment\n" +
           "  - Quality of power supply\n" +
           "  - Physical handling"
  },
  {
    question: "What are the signs of a failing hard drive?",
    answer: "Watch for these warning signs:\n\n" +
           "• Unusual noises (clicking, grinding)\n" +
           "• Slow performance or freezing\n" +
           "• Frequent crashes or errors\n" +
           "• Files becoming corrupted\n" +
           "• Bad sectors in disk checks"
  },
  {
    question: "How should I maintain my hard drive?",
    answer: "Follow these maintenance tips:\n\n" +
           "• Regular backups of important data\n" +
           "• Keep the drive cool and ventilated\n" +
           "• Use a UPS to prevent power issues\n" +
           "• Run disk checks periodically\n" +
           "• Defragment HDDs (not SSDs)"
  }
];

function FAQ() {
  return (
    <Container className="py-5">
      <Card className="border-0 shadow-sm">
        <Card.Body>
          <h1 className="text-center mb-4" style={{
            color: '#2c3e50',
            fontSize: '2.5rem',
            fontWeight: '600'
          }}>Frequently Asked Questions</h1>
          
          <Accordion>
            {faqData.map((faq, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header style={{
                  fontSize: '1.1rem',
                  fontWeight: '500'
                }}>{faq.question}</Accordion.Header>
                <Accordion.Body style={{
                  backgroundColor: '#f8f9fa',
                  whiteSpace: 'pre-line',
                  lineHeight: '1.6',
                  color: '#495057'
                }}>
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default FAQ;
