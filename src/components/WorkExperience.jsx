import React from "react";
import { Card } from "react-bootstrap";

export default function WorkExperience({ experience }) {
  return (
    <section className="section">
      <h3 className="h-neon mb-3">Work Experience</h3>
      {experience.map((w, idx) => (
        <Card className="mb-3 fancy-card" key={idx}>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <div className="fw-bold">
                  {w.company} — {w.position}
                </div>
                <div className="small text-muted">{w.range}</div>
              </div>
            </div>
            <p className="text-muted mt-2">{w.description}</p>
          </Card.Body>
        </Card>
      ))}
    </section>
  );
}
