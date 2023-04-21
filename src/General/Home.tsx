import React, { useState } from "react";

import { Col, Container, Row, Card, Image } from "react-bootstrap";
import Projects from "../Project/Projects";
import Skills from "./Skills";
import Myprofile from "../Images/Me.jpg";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

import ChatBox from "./ChatBox";

import { FaReact, FaHtml5} from "react-icons/fa";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrap, BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { SiDotnet } from "react-icons/si";
export default function Home() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Container className="vh-100 w-100 d-flex justify-content-center align-items-center">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={4} className="text-center">
            <Image
              src={Myprofile}
              alt="Profile Picture"
              className="profilePic"
              fluid
            />
            <h2>Tula Magar</h2>
            <p>Full-Stack Developer</p>
            <a
              href="/TulaMagarResume.pdf"
              className="btn btn-secondary resumeDownload"
              download>
              Resume/Download
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
            {showMore && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <h3>Additional Skills and Experience</h3>
                <ul className="skillsList">
                  <li>
                    <FaReact /> React
                  </li>
                  <li>
                    {" "}
                    <SiDotnet /> .NET Core and .NET Framework
                  </li>
                  <li>
                    <SiMicrosoftsqlserver /> SQL Server
                  </li>

                  <li>
                    <FaHtml5 /> HTML/CSS
                  </li>
                  <li>
                    <IoLogoJavascript /> JavaScript
                  </li>
                  <li>
                    <BsBootstrap /> Bootstrap
                  </li>
                  <li>
                    {" "}
                    <BsGithub /> Git
                  </li>

                  <li>
                    {" "}
                    <FiFigma /> Figma
                  </li>
                </ul>
              </motion.div>
            )}

            <button onClick={handleToggle} className="btn btn-primary">
              {showMore ? "Show Less" : "Show More"}
            </button>
          </Col>
        </Row>
      </Container>

      <Container id="aboutme" className="my-5 mt-3 py-5 text-dark ">
        <InView>
          {({ inView, ref }) => (
            <Container
              fluid
              className={`my-5 py-5 ${inView ? "aboutmeContainer" : ""}`}
              ref={ref}>
              <h2 className="text-center mb-5 py-5 pt-0">About Me</h2>
              <Row>
                <Col>
                  <Card className={`p-4 ${inView ? "FirstAboutMe" : ""}`}>
                    <Card.Body>
                      <Card.Title
                        className={`text-center ${inView ? "aboutme" : ""}`}>
                        Hi, my name is Tula Magar, and I am an experienced
                        ASP.NET Core full stack developer.
                      </Card.Title>
                      <Card.Text
                        className={`text-center ${inView ? "aboutme" : ""}`}>
                        I have a passion for developing modern, scalable, and
                        secure web applications. With <strong>5 years</strong>{" "}
                        of experience, I have a proven track record of
                        delivering high-quality projects for a variety of
                        clients and industries.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row className={`my-5 ${inView ? "SecondAboueMe" : ""}`}>
                <Col md={6}>
                  <Card className="p-4 h-100 SecondAboutMe">
                    <Card.Body>
                      <Card.Title className="aboutme">
                        Full Stack Development
                      </Card.Title>
                      <Card.Text className={` ${inView ? "aboutme" : ""}`}>
                        As a full stack developer, I have a solid understanding
                        of both front-end and back-end development. I have
                        extensive experience in using ASP.NET Core to build
                        robust and scalable APIs, and I am proficient in using
                        technologies such as HTML, CSS, JavaScript, and React.js
                        to create engaging user interfaces.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="p-4 h-100">
                    <Card.Body>
                      <Card.Title className={` ${inView ? "aboutme" : ""}`}>
                        Proactive & Collaborative
                      </Card.Title>
                      <Card.Text className={` ${inView ? "aboutme" : ""}`}>
                        In addition to my technical skills, I am also a
                        proactive and collaborative team player. I enjoy working
                        with others to find creative solutions to complex
                        problems, and I am committed to delivering projects on
                        time and within budget.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row className="mb-5 pb-5">
                <Col>
                  <Card className={`p-4 ${inView ? "ThirdAboueMe" : ""}`}>
                    <Card.Body>
                      <Card.Title
                        className={`text-center ${inView ? "aboutme" : ""}`}>
                        Ready for Your Project
                      </Card.Title>
                      <Card.Text
                        className={`text-center ${inView ? "aboutme" : ""}`}>
                        If you are looking for a talented and dedicated ASP.NET
                        Core full stack developer, I would be an excellent fit
                        for your project. I am eager to put my skills and
                        experience to work for you, and I look forward to the
                        opportunity to discuss your requirements in more detail.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          )}
        </InView>
      </Container>

      <Projects />
      <Container className="py-5">
        <h2 className="mt-5 pt-5">Education</h2>
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
