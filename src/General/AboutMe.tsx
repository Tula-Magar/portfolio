import { Container, Row, Col, Card } from "react-bootstrap";
import Skills from "./Skills";

function AboutMe() {
  return (
    <>
      <Container className="my-5 mt-3 py-5 text-dark ">
        <Container fluid className=" my-5 py-5 aboutmeContainer">
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
                    web applications. With <strong>5 years</strong> of
                    experience, I have a proven track record of delivering
                    high-quality projects for a variety of clients and
                    industries.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="my-5 SecondAboueMe">
            <Col md={6}>
              <Card className="p-4 h-100 SecondAboutMe">
                <Card.Body>
                  <Card.Title className="aboutme">
                    Full Stack Development
                  </Card.Title>
                  <Card.Text className="aboutme">
                    As a full stack developer, I have a solid understanding of
                    both front-end and back-end development. I have extensive
                    experience in using ASP.NET Core to build robust and
                    scalable APIs, and I am proficient in using technologies
                    such as HTML, CSS, JavaScript, and React.js to create
                    engaging user interfaces.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-4 h-100">
                <Card.Body>
                  <Card.Title className="aboutme">
                    Proactive & Collaborative
                  </Card.Title>
                  <Card.Text className="aboutme">
                    In addition to my technical skills, I am also a proactive
                    and collaborative team player. I enjoy working with others
                    to find creative solutions to complex problems, and I am
                    committed to delivering projects on time and within budget.
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
                    for you, and I look forward to the opportunity to discuss
                    your requirements in more detail.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
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
