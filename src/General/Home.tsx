import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Projects from "../Project/Projects";
import Skills from "./Skills";

import ChatBox from "./ChatBox";

export default function Home() {
  return (
    <>
      <Container className="vh-100 w-100 d-flex justify-content-center align-items-center">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={4} className="text-center">
            <Image
              src="https://via.placeholder.com/150"
              alt="Profile Picture"
              className="profilePic"
              fluid
            />
            <h2>John Doe</h2>
            <p>Web Developer</p>
            <a
              href="/TulaMagarResume.pdf"
              className="btn btn-secondary resumeDownload"
              download>
              Download
            </a>
          </Col>
          <Col md={8}>
            <h2>About Me</h2>
            <p>
              As a Full Stack developer, I have experience and knowledge in the
              front-end, back-end and database aspects of web development. I am
              proficient in a wide range of programming languages, frameworks,
              and technologies, including but not limited to:
            </p>
          </Col>
        </Row>
      </Container>

      <Projects />
      <Container className="py-5">
        <h2>Education</h2>
        <hr />
        <Row>
          <Col md={6}>
            <h4>Bachelor of Art in Computer Science</h4>
            <p>University of New Hampshire, 2019-2022</p>
          </Col>
          <Col md={6}>
            <h4>Associate degree in Computer Science</h4>
            <p>Manchester Community College, 2016-2019</p>
          </Col>
        </Row>
      </Container>
      <Skills />
      <ChatBox />
    </>
  );
}
