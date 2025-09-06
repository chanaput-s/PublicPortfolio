import React from "react";
import { Card } from "react-bootstrap";

export default function Resume({ resume }) {
  return (
    <section className="section">
      <h3 className="h-neon mb-3">Resume / CV</h3>
      <Card className="fancy-card p-3">
        <Card.Body>
          <strong>Contact</strong>
          <div className="text-muted small">
            Email: {resume.email} • Phone: {resume.phone}
          </div>
          <hr />
          <strong>Summary</strong>
          <p className="text-muted">{resume.summary}</p>
          <hr />
          <strong>Experience</strong>
          {resume.experience.map((e, i) => (
            <div key={i} className="mb-2">
              <div className="fw-bold">{e.role}</div>
              <div className="text-muted small">{e.range}</div>
              <div className="text-muted">{e.detail}</div>
            </div>
          ))}
        </Card.Body>
      </Card>
    </section>
  );
}
