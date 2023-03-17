import React, { useState } from "react";

import { Col, Container, Row, Image } from "react-bootstrap";
import Projects from "../Project/Projects";
import Skills from "./Skills";
import Myprofile from "../Images/Me.jpg";
import { motion } from "framer-motion";

import ChatBox from "./ChatBox";

import { FaReact, FaHtml5, FaMicrosoft } from "react-icons/fa";
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
