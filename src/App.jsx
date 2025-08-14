import React, { useEffect, useState } from "react";
import axios from "axios";
import Charts from "./components/Charts.jsx";
import DataTable from "./components/DataTable.jsx";
import Filters from "./components/Filters.jsx";
import Loader from "./components/Loader.jsx";
import Error from "./components/Error.jsx";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  const handleFilter = (region) => {
    setRegion(region);
    if (region === "") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((c) => c.continent === region));
    }
  };

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        COVID-19 Dashboard
      </h1>
      <Filters region={region} onFilter={handleFilter} />
      <Charts data={filteredData} />
      <DataTable data={filteredData} />
    </div>
  );
}

export default App;
