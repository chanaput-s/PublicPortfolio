import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export default function Dashboard({ data }) {
  return (
    <section className="section">
      <h3 className="h-neon mb-3">Achievements Dashboard</h3>
      <div style={{ width: "100%", height: 360 }} className="fancy-card p-3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" stroke="#a5f3fc" />
            <YAxis stroke="#a5f3fc" />
            <Tooltip />
            <Legend />
            <Bar dataKey="awards" stackId="a" fill="#00f9ff" />
            <Bar dataKey="certificates" stackId="a" fill="#7c4dff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
