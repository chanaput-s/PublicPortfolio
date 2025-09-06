import React from "react";
import { Card, Badge } from "react-bootstrap";

export default function Projects({ projects }) {
  return (
    <section className="section">
      <h3 className="h-neon mb-3">Projects / Portfolio</h3>
      <div className="row">
        {projects.map((p) => (
          <div className="col-12 col-md-6 mb-3" key={p.id}>
            <Card className="fancy-card">
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text className="text-muted">{p.short}</Card.Text>
                <div className="mt-2">
                  {p.tags.map((t) => (
                    <Badge bg="secondary" className="me-1" key={t}>
                      {t}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
