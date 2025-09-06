import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const items = [
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

export default function Sidebar() {
  return (
    <Nav className="flex-column p-3">
      {items.map((i) => (
        <Nav.Link
          as={NavLink}
          to={i.to}
          key={i.to}
          className={({ isActive }) =>
            `nav-link mb-2 ${isActive ? "active" : ""}`
          }
          end
        >
          {i.label}
        </Nav.Link>
      ))}
    </Nav>
  );
}
