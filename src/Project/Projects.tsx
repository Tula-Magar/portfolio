import { Container, Row, Col, Card } from "react-bootstrap";

import { Link } from "react-router-dom";

function Projects() {
  const ProjectData = [
    {
      id: 1,
      imgSrc: "https://via.placeholder.com/300x200.png?text=Project+1",
      imgAlt: "Project 1",
      title: "Online Soccer Shopping",
      projectLink: "https://github.com/Tula-Magar/OnlineSoccerShopping",
      ProjectLive: "https://onlinesoccershopping.herokuapp.com/",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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

  return (
    <Container className="my-5 py-5">
      <h2 className="text-center mb-5">Projects</h2>
      <Row className="mb-5 pb-5">
        {ProjectData.map((project) => (
          <Col md={4} className="mb-4" key={project.id}>
            <Card className="in-view h-100">
              <Card.Img
                variant="top"
                src={project.imgSrc}
                alt={project.imgAlt}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>

                <div className="d-flex flex-row justify-content-between mt-auto">
                  <Link
                    to={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto mx-auto btn btn-primary"
                    style={{ width: "150px" }}
                  >
                    View Code
                  </Link>
                  <Link
                    to={project.ProjectLive}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto mx-auto btn btn-primary"
                    style={{ width: "150px" }}
                  >
                    View Live
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
