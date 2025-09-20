// Countries.jsx
import React, { use, useState } from "react";
import Coutnry from "../Country/Coutnry";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("visited", country);
    const updatedVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(updatedVisitedCountries);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        All Countries: {countries.length}
      </h1>
      <p className="text-xl">
        <span className="underline  text-indigo-600">Total Visited:</span>{" "}
        {visitedCountries.length}
      </p>
      <ol className="list-decimal list-inside space-y-1">
        {visitedCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {countries.map((country) => (
          <Coutnry
            country={country}
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
          ></Coutnry>
        ))}
      </div>
    </div>
  );
};

export default Countries;
