import "./App.css";
import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import RestaurantList from "./components/RestaurantList";
import TopRated from "./components/TopRated";
import Shimmer from "./components/Shimmer";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

    const fetchRestaurants = async () => {
    const response = await fetch(
      "https://namastedev.com/api/v1/listRestaurants",
    );
    const json = await response.json();

    const restaurantData =
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurants(restaurantData || []);
    setFilteredData(restaurantData || []);
  };

  if(filteredData.length===0){
    return <Shimmer/> 
  }


  return (
    <div className="App">
      <Navbar />
      <TopRated  restaurants={restaurants}  filteredData={filteredData} setFilteredData={setFilteredData}/>
      <RestaurantList restaurants={restaurants} setRestaurants={setRestaurants}  filteredData={filteredData} setFilteredData={setFilteredData}/>
    </div>
  );
}

export default App;
