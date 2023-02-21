import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Skills() {
  return (
    <>
      <Container className="my-5 py-5">
        <h2 className="mb-4">Skills</h2>
        <hr />
        <Row className="mb-5 pb-5">
          <Col md={6} className="mb-4 py-5">
            <h4 className="mb-4">Programming Languages</h4>
            <ul className="list-group ">
              <li className="list-group-item list-group-item-primary">C#</li>
              <li className="list-group-item list-group-item-secondary">
                JavaScript
              </li>
              <li className="list-group-item list-group-item-success">
                HTML/CSS
              </li>
              <li className="list-group-item list-group-item-danger">Python</li>
            </ul>
          </Col>
          <Col md={6} className="mb-4 py-5">
            <h4 className="mb-4">Frameworks/Libraries</h4>
            <ul className="list-group">
              <li className="list-group-item list-group-item-primary">React</li>
              <li className="list-group-item list-group-item-secondary">
                ASP.NET Core
              </li>
              <li className="list-group-item list-group-item-success">
                React Redux
              </li>
              <li className="list-group-item list-group-item-danger">
                Bootstrap
              </li>
            </ul>
          </Col>
          <Col md={6} className="mb-4 py-5">
            <h4 className="mb-4">Database</h4>
            <ul className="list-group">
              <li className="list-group-item list-group-item-primary">
                SQL Server
              </li>
              <li className="list-group-item list-group-item-secondary">
                MongoDB
              </li>
              <li className="list-group-item list-group-item-success">MySQL</li>
            </ul>
          </Col>
          <Col md={6} className="mb-4 py-5">
            <h4 className="mb-4">Tools</h4>
            <ul className="list-group">
              <li className="list-group-item list-group-item-primary">
                Visual Studio
              </li>
              <li className="list-group-item list-group-item-secondary">
                Vs code
              </li>
              <li className="list-group-item list-group-item-success">Git</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
