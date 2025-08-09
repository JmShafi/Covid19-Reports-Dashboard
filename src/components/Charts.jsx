import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement } from "chart.js";

ChartJS.register(
  Title, Tooltip, Legend,
  CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement
);

function Charts({ data }) {
  const countries = data.map((c) => c.country);
  const cases = data.map((c) => c.cases);
  const deaths = data.map((c) => c.deaths);
  const recovered = data.map((c) => c.recovered);

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <Bar
          data={{
            labels: countries,
            datasets: [{ label: "Cases", data: cases, backgroundColor: "rgba(54, 162, 235, 0.6)" }],
          }}
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <Line
          data={{
            labels: countries,
            datasets: [{ label: "Deaths", data: deaths, borderColor: "rgba(255, 99, 132, 0.8)", fill: false }],
          }}
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <Pie
          data={{
            labels: countries.slice(0, 10),
            datasets: [{ label: "Recovered", data: recovered.slice(0, 10), backgroundColor: ["#4ade80", "#facc15", "#f87171", "#60a5fa", "#a78bfa", "#fbbf24", "#34d399", "#f472b6", "#c084fc", "#f87171"] }],
          }}
        />
      </div>
    </div>
  );
}

export default Charts;
