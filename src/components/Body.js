
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import RestrauntCard from "./RestrauntCard";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [cityTitle, setCityTitle] = useState("");
  const [searchTxt, setSearchTxt] = useState("");
  const { latitude, longitude } = useSelector((store) => store.coords);
  const isOnline = useOnline();

  useEffect(() => {
    getRestaurants();
  }, [latitude, longitude]);

  async function getRestaurants() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}`
      );
      const data = await response.json();

      const restaurantData =
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setCityTitle(data?.data?.cards[2]?.card?.card?.header?.title);
      setAllRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  const handleSearch = () => {
    const filteredData = filterData(searchTxt, allRestaurants);
    setFilteredRestaurants(filteredData);
  };

  if (!isOnline) {
    return <h1>Offline, please check your internet connection!!</h1>;
  }

  if (!allRestaurants) {
    return <Shimmer />;
  }

  if (filteredRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mx-6 mt-1">
        <div className=" md:w-3/10 md:mr-4">
          <div className="flex justify-between border border-gray-300 p-2 my-2 rounded-lg">
            <input
              type="text"
              className="outline-0"
              placeholder="Search Restaurants"
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>
              <BsSearch />
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-semibold mt-4 md:mt-0">
          {cityTitle}
        </h1>
      </div>

      <div className="restraunt-list flex flex-wrap items-center justify-center mt-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className=" border shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 m-2 box-content transition-transform duration-300 text-black no-underline"
            to={`/restaurant/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestrauntCard data={restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
