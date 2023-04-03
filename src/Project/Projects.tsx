import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { Link } from "react-router-dom";

interface Project {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  projectLink: string;
  ProjectLive: string;
  text: string | string[];
  animationClass: string;
}

function Projects() {
  const [searchInput, setSearchInput] = useState("");
  const ProjectData: Project[] = [
    {
      id: 1,
      imgSrc: "https://via.placeholder.com/300x200.png?text=Project+1",
      imgAlt: "Project 1",
      title: "Online Soccer Shopping",
      projectLink: "https://github.com/Tula-Magar/OnlineSoccerShopping",
      ProjectLive: "https://onlinesoccershopping.herokuapp.com/",
      text: [
        "This project is a web application built with ASP.NET Core and ReactJS, using Bootstrap and React-Bootstrap for styling. The application allows users to browse products, add them to a shopping cart, and place orders.",
        "The backend is built with ASP.NET Core, providing RESTful APIs to interact with the database and process orders.",
        "The frontend is built with ReactJS, providing a responsive and dynamic user interface for browsing and ordering products.",
        "Bootstrap and React-Bootstrap are used to provide a consistent and modern styling throughout the application, making it easy to use and visually appealing.",
        "This project showcases the use of ASP.NET Core and ReactJS to build a full-stack web application, integrating different technologies and libraries to provide a complete user experience.",
      ],
      animationClass: "animate-left",
    },
    {
      id: 2,
      imgSrc: "https://via.placeholder.com/300x200.png?text=Project+2",
      imgAlt: "Project 2",
      title: "Chukay",
      projectLink: "https://github.com/Tula-Magar/Chukay",
      ProjectLive: "https://tula-magar.github.io/Chukay/",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      animationClass: "animate-right",
    },
    {
      id: 3,
      imgSrc: "https://via.placeholder.com/300x200.png?text=Project+3",
      imgAlt: "Project 3",
      title: "Computing",
      projectLink: "https://github.com/Tula-Magar/computing",
      ProjectLive: "https://techcomputinginfo.com/",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      animationClass: "animate-bottom",
    },
  ];

  const filteredProjects = ProjectData.filter((project) =>
    project.title.toLowerCase().includes(searchInput?.toLowerCase())
  );

  return (
    <Container className="my-5 py-5">
      <h2 className="text-center mb-5">Projects</h2>
      <div className="mb-4 projectFilterContainer">
        <input
          type="text"
          placeholder="Search projects"
          value={searchInput}
          className="projectFilter"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {filteredProjects.map((project) => (
        <Row md={12} className="mb-5 pb-5" key={project.id}>
          {project.id % 2 === 0 ? (
            <>
              <Col md={6} className="mb-4 h-100">
                <Card className="in-view ">
                  <Card.Img
                    variant="top"
                    src={project.imgSrc}
                    alt={project.imgAlt}
                  />
                </Card>
              </Col>

              <Col md={6} className="mb-4">
                <Card className="in-view h-100">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{project.title}</Card.Title>

                    {Array.isArray(project.text) ? (
                      project.text.map((line, index) => (
                        <Card.Text key={index}>{line}</Card.Text>
                      ))
                    ) : (
                      <Card.Text>{project.text}</Card.Text>
                    )}

                    <div className="d-flex flex-row justify-content-between mt-auto">
                      <Link
                        to={project.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-auto mx-auto   project-btn"
                      >
                        View Code
                      </Link>
                      <Link
                        to={project.ProjectLive}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-auto mx-auto  project-btn"
                      >
                        View Live
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ) : (
            <>
              <Col md={6} className="mb-4">
                <Card className="in-view h-100">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{project.title}</Card.Title>

                    {Array.isArray(project.text) ? (
                      project.text.map((line, index) => (
                        <Card.Text key={index}>{line}</Card.Text>
                      ))
                    ) : (
                      <Card.Text>{project.text}</Card.Text>
                    )}

                    <div className="d-flex flex-row justify-content-between mt-auto">
                      <Link
                        to={project.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-auto mx-auto   project-btn"
                      >
                        View Code
                      </Link>
                      <Link
                        to={project.ProjectLive}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-auto mx-auto  project-btn"
                      >
                        View Live
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4 h-100">
                <Card className="in-view ">
                  <Card.Img
                    variant="top"
                    src={project.imgSrc}
                    alt={project.imgAlt}
                  />
                </Card>
              </Col>
            </>
          )}
        </Row>
      ))}
    </Container>
  );
}

export default Projects;
