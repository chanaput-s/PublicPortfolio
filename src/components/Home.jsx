import React from "react";
import { Card } from "react-bootstrap";

export default function Home({ profile }) {
  return (
    <section className="section">
      <Card className="p-3 fancy-card">
        <Card.Body>
          <h2 className="h-neon">{profile.name}</h2>
          <p className="text-muted">{profile.tagline}</p>
          <p>{profile.summary}</p>
        </Card.Body>
      </Card>
    </section>
  );
}
