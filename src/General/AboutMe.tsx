import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Skills from "./Skills";

function AboutMe() {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md={4} className="text-center">
            <Image
              src="https://via.placeholder.com/150"
              alt="Profile Picture"
              className="rounded-circle mb-3"
              fluid
            />
            <h2>John Doe</h2>
            <p>Web Developer</p>
            <a href="/TulaMagarResume.pdf" className="btn btn-info" download>
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
      <Skills />
      <Container className="pb-5">
        <Row className="mb-5 pb-5 text-dark">
          <Col md={6} className="text-center">
            <Card className="mb-3  h-100">
              <Card.Body>
                <Card.Text>
                  I have experience building dynamic and responsive web
                  applications using both monolithic and microservice
                  architectures, as well as deploying and maintaining web
                  applications on cloud-based services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="text-center">
            <Card className="mb-3 h-100">
              <Card.Body>
                <Card.Text>
                  In addition, I possess strong problem-solving skills,
                  communication skills, and an ability to learn and adapt
                  quickly to new technologies and tools. I am passionate about
                  developing robust, scalable, and secure web applications that
                  provide a seamless user experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutMe;
