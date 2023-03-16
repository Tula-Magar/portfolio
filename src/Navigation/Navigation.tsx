import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

interface NavigationProps {
  onThemeChange: () => void;
  theme: string;
}

export default function Navigation({ onThemeChange, theme }: NavigationProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="sticky-top">
        <Container className="pt-1 pb-1">
          <Navbar expand="md" expanded={expanded}>
            <Navbar.Brand as={NavLink} to="/" className="text-white">
              Tula Magar
            </Navbar.Brand>
            <BootstrapSwitchButton
              onChange={onThemeChange}
              className="text-white"
              checked={true}
              style="border"
            />
            <Navbar.Toggle
              className="bg-white"
              onClick={() => setExpanded((expanded) => !expanded)}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  as={NavLink}
                  to="/"
                  className="text-white"
                  onClick={() => setExpanded(false)}>
                  Home
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/about"
                  className="text-white"
                  onClick={() => setExpanded(false)}>
                  About
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/experience"
                  className="text-white"
                  onClick={() => setExpanded(false)}>
                  Experience
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/contact"
                  className="text-white"
                  onClick={() => setExpanded(false)}>
                  Contact
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/blog"
                  className="text-white"
                  onClick={() => setExpanded(false)}>
                  Blog
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </>
  );
}
