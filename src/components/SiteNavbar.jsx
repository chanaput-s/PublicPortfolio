import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function SiteNavbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/resume", label: "Resume" },
    { to: "/skills", label: "Skills" },
    { to: "/work", label: "Work" },
    { to: "/projects", label: "Projects" },
    { to: "/achievements", label: "Achievements" },
    { to: "/education", label: "Education" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <Navbar expand="lg" fixed="top" className="neon-navbar">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="neon-brand">
          🚀 My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {links.map((l) => (
                <Nav.Link
                  key={l.to}
                  as={NavLink}
                  to={l.to}
                  end
                  className="mx-1"
                >
                  {l.label}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
