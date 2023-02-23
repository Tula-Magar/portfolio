import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container className="mt-5">
      <h1>My Blog</h1>
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x150.png" />
            <Card.Body>
              <Card.Title>Blog Post Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x150.png" />
            <Card.Body>
              <Card.Title>Blog Post Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x150.png" />
            <Card.Body>
              <Card.Title>Blog Post Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
