import { Container, Row, Col, Card } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function Projects() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const ProjectData = [
    {
      id: 1,
      imgSrc: "https://via.placeholder.com/300x200.png?text=Project+1",
      imgAlt: "Project 1",
      title: "Project 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      animationClass: "animate-left",
    },
    {
      id: 2,
      imgSrc: "https://via.placeholder.com/300x200.png?text=Project+2",
      imgAlt: "Project 2",
      title: "Project 2",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      animationClass: "animate-right",
    },
    {
      id: 3,
      imgSrc: "https://via.placeholder.com/300x200.png?text=Project+3",
      imgAlt: "Project 3",
      title: "Project 3",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      animationClass: "animate-bottom",
    },
  ];

  return (
    <Container className="my-5 py-5">
      <Row className="mb-5 pb-5">
        {ProjectData.map((project) => (
          <Col md={4} className="mb-4" key={project.id}>
            <Card
              ref={ref}
              className={
                inView
                  ? `projectCard ${project.animationClass} in-view h-100`
                  : project.animationClass
              }>
              <Card.Img
                variant="top"
                src={project.imgSrc}
                alt={project.imgAlt}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>
                <Link
                  to="#"
                  className="mt-auto mx-auto btn btn-primary"
                  style={{ width: "150px" }}>
                  View details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
