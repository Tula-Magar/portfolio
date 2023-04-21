import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function WorkExperience() {
  return (
    <Container className="my-5 py-5 text-dark">
      <h2 className="mb-5 text-dark">Work Experience</h2>
      <Row className="mb-5">
        <Col>
          <Card>
            <Card.Header>
              <h4 className="mb-0">Full-Stack Developer (Intern)</h4>
              <p className="mb-0">Company Name | Date Range</p>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>
                    Collaborated with senior developers to build web
                    applications using React.js and Node.js
                  </li>
                  <li>
                    Participated in code reviews and contributed to the
                    improvement of the codebase
                  </li>
                  <li>
                    Assisted with the development of RESTful APIs and database
                    design and implementation
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <Card>
            <Card.Header>
              <h4 className="mb-0">Full-Stack Developer</h4>
              <p className="mb-0">Company Name | Date Range</p>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>
                    Developed and maintained web applications using React.js,
                    Node.js, and MongoDB
                  </li>
                  <li>
                    Collaborated with product managers and designers to create
                    intuitive user experiences
                  </li>
                  <li>
                    Optimized application performance and implemented security
                    best practices
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <Card>
            <Card.Header>
              <h4 className="mb-0">Full-Stack Developer (Intern)</h4>
              <p className="mb-0">Company Name | Date Range</p>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>
                    Collaborated with senior developers to build web
                    applications using React.js and Node.js
                  </li>
                  <li>
                    Participated in code reviews and contributed to the
                    improvement of the codebase
                  </li>
                  <li>
                    Assisted with the development of RESTful APIs and database
                    design and implementation
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkExperience;
