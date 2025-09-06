import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function Skills({ skills }) {
  return (
    <section className="section">
      <h3 className="h-neon mb-3">Skills</h3>
      <div className="row">
        {skills.map((s) => (
          <div className="col-12 col-md-6 mb-3" key={s.name}>
            <div className="fancy-card p-3">
              <div className="d-flex justify-content-between small mb-2">
                <div>{s.name}</div>
                <div>{s.level}%</div>
              </div>
              <ProgressBar now={s.level} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
