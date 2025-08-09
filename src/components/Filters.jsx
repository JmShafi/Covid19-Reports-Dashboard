import React from "react";

function Filters({ region, onFilter }) {
  const regions = ["", "Asia", "Europe", "Africa", "North America", "South America", "Oceania"];

  return (
    <div className="flex gap-4 mb-6">
      <select
        value={region}
        onChange={(e) => onFilter(e.target.value)}
        className="p-2 border rounded"
      >
        {regions.map((r) => (
          <option key={r} value={r}>
            {r === "" ? "All Regions" : r}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
