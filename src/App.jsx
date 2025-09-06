import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";

import SiteNavbar from "./components/SiteNavbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";

import {
  profile,
  resume as resumeData,
  sampleSkills,
  sampleProjects,
  achievementsList,
  achievementsData,
  experience as workExp,
  contact as contactData,
} from "./data";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <SiteNavbar />
      <Container fluid className="pt-3">
        <Row>
          <Col md={3} className="sidebar-col d-none d-md-block">
            <Sidebar />
          </Col>

          <Col md={9} xs={12} className="p-4">
            <div className="d-flex justify-content-end mb-3">
              <Button
                size="sm"
                variant={theme === "dark" ? "outline-info" : "outline-dark"}
                className="theme-toggle"
                onClick={() =>
                  setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                }
              >
                {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
              </Button>
            </div>

            <Routes>
              <Route path="/" element={<Home profile={profile} />} />
              <Route path="/resume" element={<Resume resume={resumeData} />} />
              <Route
                path="/skills"
                element={<Skills skills={sampleSkills} />}
              />
              <Route
                path="/work"
                element={<WorkExperience experience={workExp} />}
              />
              <Route
                path="/projects"
                element={<Projects projects={sampleProjects} />}
              />
              <Route
                path="/achievements"
                element={<Achievements achievements={achievementsList} />}
              />
              <Route
                path="/education"
                element={
                  <Education
                    education={[
                      {
                        institution:
                          "King Mongkut's University of Technology Thonburi",
                        degree: "B.Eng Robotics & Automation",
                        range: "2021",
                      },
                    ]}
                  />
                }
              />
              <Route
                path="/dashboard"
                element={<Dashboard data={achievementsData} />}
              />
              <Route
                path="/contact"
                element={<Contact contact={contactData} />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
