import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar expand="md" expanded={expanded}>
        <Container className="pt-3">
          <Navbar.Brand as={NavLink} to="/">
            Tula Magar
          </Navbar.Brand>
          <Navbar.Toggle
            className="bg-white"
            onClick={() => setExpanded((expanded) => !expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                onClick={() => setExpanded(false)}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/experience"
                onClick={() => setExpanded(false)}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                onClick={() => setExpanded(false)}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </>
  );
}
