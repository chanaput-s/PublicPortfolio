import React from "react";
import { Card } from "react-bootstrap";

export default function Contact({ contact }) {
  return (
    <section className="section">
      <h3 className="h-neon mb-3">Contact</h3>
      <Card className="fancy-card p-3">
        <Card.Body>
          <div>Email: {contact.email}</div>
          <div>Location: {contact.location}</div>
          <div className="mt-2">
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
}
