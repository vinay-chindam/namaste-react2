import { useState } from "react"
import "./TopRated.css";


const TopRated=({setFilteredData,restaurants})=>{

    const [searchInput,setSearchInput]=useState("")
    
    function filterTopRated(){
        setFilteredData(restaurants.filter((res)=>res.info.avgRating>4.5))
}
    function handleSearch(){
        


        setFilteredData(restaurants.filter((res)=>res.info.name.toLowerCase().includes(searchInput.toLowerCase())))
        
}



   return (
  <div className="toprated-container">

    <div className="search-box">
      <input
        className="search-input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search restaurants..."
      />

      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>

    <button className="toprated-btn" onClick={filterTopRated}>
      Top Rated Restaurants ⭐
    </button>

  </div>
);
}

export default TopRated