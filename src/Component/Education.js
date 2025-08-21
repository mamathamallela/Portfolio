// Education.js
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './Style.css'; // Make sure this path matches your file name!

const data = [
  { name: 'B.Sc', cgpa: 7.36, institution: "KSN Women’s Degree College, Anthapuram" },
  { name: 'Intermediate', cgpa: 8.36, institution: 'APSWER College, Thondur' },
  { name: 'SSC', cgpa: 8.2, institution: 'APSWER School, Thondur' },
];

export default function Education() {
  return (
    <section className="education-section">
      <h2>Education - CGPA Bar Chart</h2>
      <div className="chart-wrapper">
  <ResponsiveContainer width="30%" height={400}>
    <BarChart
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={{ fontSize: 14 }} />
         <YAxis domain={[0, 10]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="cgpa" fill="#0073b1" barSize={30} />
    </BarChart>
  </ResponsiveContainer>
</div>
    </section>
  );
}
