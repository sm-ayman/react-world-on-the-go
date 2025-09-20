// Countries.jsx
import React, { use } from "react";
import Coutnry from "../Country/Coutnry";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        All Countries: {countries.length}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {countries.map((country) => (
          <Coutnry country={country} key={country.cca3.cca3}></Coutnry>
        ))}
      </div>
    </div>
  );
};

export default Countries;
