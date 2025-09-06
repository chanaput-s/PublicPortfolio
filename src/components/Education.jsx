import React from "react";
import { Card } from "react-bootstrap";

export default function Education({ education }) {
  return (
    <section className="section">
      <h3 className="h-neon mb-3">Education</h3>
      {education.map((ed, i) => (
        <Card key={i} className="mb-3 fancy-card">
          <Card.Body>
            <div className="fw-bold">{ed.institution}</div>
            <div className="small text-muted">
              {ed.degree} • {ed.range}
            </div>
          </Card.Body>
        </Card>
      ))}
    </section>
  );
}
