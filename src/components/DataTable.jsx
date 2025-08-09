import React, { useState } from "react";

function DataTable({ data }) {
  const [sortConfig, setSortConfig] = useState({ key: "cases", direction: "desc" });

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="cursor-pointer" onClick={() => handleSort("country")}>Country</th>
            <th className="cursor-pointer" onClick={() => handleSort("cases")}>Cases</th>
            <th className="cursor-pointer" onClick={() => handleSort("deaths")}>Deaths</th>
            <th className="cursor-pointer" onClick={() => handleSort("recovered")}>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((c) => (
            <tr key={c.country}>
              <td className="border px-4 py-2">{c.country}</td>
              <td className="border px-4 py-2">{c.cases.toLocaleString()}</td>
              <td className="border px-4 py-2">{c.deaths.toLocaleString()}</td>
              <td className="border px-4 py-2">{c.recovered.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
