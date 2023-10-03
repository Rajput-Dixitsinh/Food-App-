
import React from 'react';

const SearchCity = ({ setCity, searchRestaurants, city }) => {
  return (
    <div className="flex ml-28 items-center">
      <div className="border rounded-xl px-2 py-1 sm:w-1/4 md:w-1/3 lg:w-1/4">
        <input
          type="text"
          className="outline-none w-full"
          placeholder="Search by City"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
      </div>
      <button
        className="border rounded-xl px-2 py-1 ml-2 bg-orange-600 text-white sm:text-sm md:text-base lg:text-lg"
        onClick={() => searchRestaurants()}
      >
        Search
      </button>
    </div>
  );
};

export default SearchCity;
