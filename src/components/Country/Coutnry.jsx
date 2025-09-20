import React from "react";

const Coutnry = ({ country }) => {
  console.log(country);
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 hover:shadow-2xl transition duration-300">
      <img
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
        className="w-full h-36 object-cover rounded-md mb-4 shadow-2xl hover:scale-110 duration-500 cursor-pointer"
      />
      <h1 className="font-semibold text-gray-900 text-center">
        <span className="text-2xl">{country.name.common}</span>
      </h1>
      <p className="text-gray-600 mt-2 text-sm">
        Population:{" "}
        <span className="font-medium text-gray-800">
          {country.population.population}
        </span>
      </p>
      <p className="text-gray-600 mt-2 text-sm">
        Continets:{" "}
        <span className="font-medium text-gray-800">
          {country.continents.continents}
        </span>
      </p>
    </div>
  );
};

export default Coutnry;
