import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard ";
import "./RestaurantList.css";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const response = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await response.json();

    const restaurantData =
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRestaurants(restaurantData || []);
  };

  return (
    <div className="restaurant-list">
      <div className="restaurant-container">
        {restaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;