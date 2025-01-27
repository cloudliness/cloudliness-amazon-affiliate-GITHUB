import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Accordion } from 'react-bootstrap';
import './Articles.css';
import hardDriveArticle from '../articles/hard-drives/hard-drive-article';

function Articles() {
  const [expanded, setExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [activeKey, setActiveKey] = useState(null);

  const articles = [
    hardDriveArticle
  ];

  const categories = [
    "Storage",
    "Cloud"
  ];

  const years = ["2025"];
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setActiveKey(null);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setActiveKey(null);
  };

  const filterArticles = () => {
    return articles.filter(article => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      const matchesYear = selectedYear === 'all' || article.date.startsWith(selectedYear);
      return matchesCategory && matchesYear;
    });
  };

  return (
    <Container className="articles-container my-5">
      <Row>
        {/* Sidebar with Archive */}
        <Col lg={3} className="archive-sidebar mb-4">
          <Card>
            <Card.Header className="archive-header">
              <h5 className="mb-0">Article Archive</h5>
            </Card.Header>
            <Card.Body className="p-0">
              <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                {/* Categories Section */}
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Categories</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item 
                        action 
                        active={selectedCategory === 'all'}
                        onClick={() => handleCategorySelect('all')}
                      >
                        All Categories
                      </ListGroup.Item>
                      {categories.map((category, index) => (
                        <ListGroup.Item 
                          key={index}
                          action
                          active={selectedCategory === category}
                          onClick={() => handleCategorySelect(category)}
                        >
                          {category}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Years and Months Section */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Archive by Date</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item 
                        action 
                        active={selectedYear === 'all'}
                        onClick={() => handleYearSelect('all')}
                      >
                        All Years
                      </ListGroup.Item>
                      {years.map((year, index) => (
                        <ListGroup.Item 
                          key={index}
                          action
                          active={selectedYear === year}
                          onClick={() => handleYearSelect(year)}
                        >
                          {year}
                          <span className="badge bg-secondary float-end">
                            {articles.filter(a => a.date.startsWith(year)).length}
                          </span>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>

        {/* Main Content */}
        <Col lg={9}>
          <h1 className="text-center mb-4">Tech Articles</h1>
          <Row className="g-4">
            {filterArticles().map((article) => (
              <Col md={12} key={article.id}>
                <Card className="article-card mb-4">
                  <Card.Body>
                    <div className="article-metadata mb-2">
                      <span className="article-date">{new Date(article.date).toLocaleDateString()}</span>
                      <span className="article-category">{article.category}</span>
                    </div>
                    <Card.Title className="mb-3">{article.title}</Card.Title>
                    <div className="article-preview-container">
                      <Card.Text>
                        {article.preview}
                      </Card.Text>
                      {article.content && (
                        <div className="article-actions">
                          <Button 
                            variant="link" 
                            onClick={toggleExpand}
                            className="read-more-link"
                          >
                            {expanded ? 'Show Less' : 'Read More →'}
                          </Button>
                        </div>
                      )}
                    </div>
                    {expanded && article.content && (
                      <div className="article-full-content mt-4">
                        <hr className="content-divider" />
                        <div className="article-content">
                          {article.content.split('\n').map((line, index) => {
                            const trimmedLine = line.trim();
                            
                            // Check if the line contains an image tag
                            const imgMatch = line.match(/\[img:(.*?)\]/);
                            if (imgMatch) {
                              return (
                                <div key={index} className="article-image-container">
                                  <img 
                                    src={imgMatch[1]} 
                                    alt="Article illustration" 
                                    className="article-image"
                                  />
                                </div>
                              );
                            }

                            // Check if line is a main section header (standalone short line)
                            if (trimmedLine && trimmedLine.length < 50 && !trimmedLine.includes('•') && !trimmedLine.match(/^\d+\./)) {
                              return (
                                <h2 key={index} className="article-header">
                                  {trimmedLine}
                                </h2>
                              );
                            }

                            // Check if line is a bullet point
                            if (trimmedLine.startsWith('•')) {
                              return (
                                <div key={index} className="article-bullet-point">
                                  {trimmedLine}
                                </div>
                              );
                            }

                            // Regular paragraph (only if not empty)
                            return trimmedLine ? (
                              <p key={index} className="article-paragraph">
                                {trimmedLine}
                              </p>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Articles;
