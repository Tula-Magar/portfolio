import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Projects from "../Project/Projects";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      {/* <Container className="  py-5 aboutmeContainer ">
        <div className="FirstAboutMe p-4">
          <h2 className="text-center aboutme">
            Hi, my name is Tula Magar, and I am an experienced ASP.NET Core full
            stack developer.
          </h2>
          <p className="text-center aboutme">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have a passion for developing
            modern, scalable, and secure web applications. With{" "}
            <strong>5 years</strong> of experience, I have a proven track record
            of delivering high-quality projects for a variety of clients and
            industries.
          </p>
        </div>

        <hr className="my-5" />
        <div className="row SecondAboutMe p-4 ">
          <div className="col-md-6">
            <h3>Full Stack Development</h3>
            <p className="aboutme">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a full stack developer, I
              have a solid understanding of both front-end and back-end
              development. I have extensive experience in using ASP.NET Core to
              build robust and scalable APIs, and I am proficient in using
              technologies such as HTML, CSS, JavaScript, and React.js to create
              engaging user interfaces.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Proactive & Collaborative</h3>
            <p className="aboutme">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In addition to my technical
              skills, I am also a proactive and collaborative team player. I
              enjoy working with others to find creative solutions to complex
              problems, and I am committed to delivering projects on time and
              within budget.
            </p>
          </div>
        </div>
        <div className="ThirdAboueMe p-4">
          <hr className="my-5" />
          <h3 className="text-center aboutme">Ready for Your Project</h3>
          <p className="text-center aboutme">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you are looking for a
            talented and dedicated ASP.NET Core full stack developer, I would be
            an excellent fit for your project. I am eager to put my skills and
            experience to work for you, and I look forward to the opportunity to
            discuss your requirements in more detail.
          </p>
        </div>
      </Container> */}
      <Container className="my-5 mt-3 py-5 text-dark aboutmeContainer ">
        <Row>
          <Col>
            <Card className="p-4 FirstAboutMe">
              <Card.Body>
                <Card.Title className="text-center aboutme">
                  Hi, my name is Tula Magar, and I am an experienced ASP.NET
                  Core full stack developer.
                </Card.Title>
                <Card.Text className="text-center aboutme">
                  I have a passion for developing modern, scalable, and secure
                  web applications. With <strong>5 years</strong> of experience,
                  I have a proven track record of delivering high-quality
                  projects for a variety of clients and industries.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-5 SecondAboueMe">
          <Col md={6} className="mb-5">
            <Card className="p-4 SecondAboutMe">
              <Card.Body>
                <Card.Title className="aboutme">
                  Full Stack Development
                </Card.Title>
                <Card.Text className="aboutme">
                  As a full stack developer, I have a solid understanding of
                  both front-end and back-end development. I have extensive
                  experience in using ASP.NET Core to build robust and scalable
                  APIs, and I am proficient in using technologies such as HTML,
                  CSS, JavaScript, and React.js to create engaging user
                  interfaces.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4">
              <Card.Body>
                <Card.Title className="aboutme">
                  Proactive & Collaborative
                </Card.Title>
                <Card.Text className="aboutme">
                  In addition to my technical skills, I am also a proactive and
                  collaborative team player. I enjoy working with others to find
                  creative solutions to complex problems, and I am committed to
                  delivering projects on time and within budget.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5 pb-5">
          <Col>
            <Card className="p-4 ThirdAboueMe">
              <Card.Body>
                <Card.Title className="text-center aboutme">
                  Ready for Your Project
                </Card.Title>
                <Card.Text className="text-center aboutme">
                  If you are looking for a talented and dedicated ASP.NET Core
                  full stack developer, I would be an excellent fit for your
                  project. I am eager to put my skills and experience to work
                  for you, and I look forward to the opportunity to discuss your
                  requirements in more detail.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Projects />
      <Container className="py-5">
        <h2>Education</h2>
        <hr />
        <Row>
          <Col md={6}>
            <h4>Bachelor of Science in Computer Science</h4>
            <p>University of Example, 2015-2019</p>
          </Col>
          <Col md={6}>
            <h4>Master of Science in Information Technology</h4>
            <p>Example University, 2019-2021</p>
          </Col>
        </Row>
      </Container>
      <Skills />
    </>
  );
}
