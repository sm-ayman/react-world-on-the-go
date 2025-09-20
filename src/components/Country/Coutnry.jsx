import React, { useState } from "react";

const Coutnry = ({ country }) => {
  const [visited, setVisited] = useState(false);
  // console.log(country);

  const handleVisit = () => {
    // system-1
    /* if (visited) {
      setVisited(false);
      alert(`${country.name.common} set to Not Visited`);
    } else {
      setVisited(true);
      alert(`${country.name.common} Visited`);
    } */

  //  system-2
    setVisited(!visited);
    alert(
      `${country.name.common} ${visited ? "set to Not Visited" : "Visited"}`
    );
  };

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
      <p className="text-gray-600 mt-2 text-sm">
        <span className="font-medium text-gray-800">Area:</span>{" "}
        {country.area.area}
      </p>
      <div className="text-end mt-2">
        <button
          onClick={handleVisit}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          {visited ? "Visited" : "Not Visited"}
        </button>
      </div>
    </div>
  );
};

export default Coutnry;
