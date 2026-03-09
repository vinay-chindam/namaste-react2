import { useState, useEffect } from "react";
import RestaurantList from "../components/RestaurantList";
import TopRated from "../components/TopRated";
import Shimmer from "../components/Shimmer";
import useFetch from "../utils/UseFetch";
import LoginModal from "./LoginModal";

function Home() {
  
  const {data,loading,error}=useFetch("https://namastedev.com/api/v1/listRestaurants")
  const [restaurants, setRestaurants] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      const restaurantData =
        data?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurants(restaurantData || []);
      setFilteredData(restaurantData || []);
    }
  }, [data]);



  if (loading) return <Shimmer />;

  if (error) return <h2>Error loading restaurants</h2>;

  return  (
    <div className="App">
      <TopRated
        restaurants={restaurants}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <RestaurantList
        restaurants={restaurants}
        setRestaurants={setRestaurants}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
    </div>
  );
}

export default Home;