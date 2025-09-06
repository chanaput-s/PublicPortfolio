import React from "react";
import { Card } from "react-bootstrap";

export default function Achievements({ achievements }) {
  return (
    <section className="section">
      <h3 className="h-neon mb-3">Achievements / Awards</h3>
      <div className="row">
        {achievements.map((a, i) => (
          <div className="col-12 col-md-6 mb-3" key={i}>
            <Card className="fancy-card">
              <Card.Body>
                <Card.Title>{a.title}</Card.Title>
                <Card.Text className="text-muted">{a.info}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
