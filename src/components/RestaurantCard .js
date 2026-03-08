import React from "react";
import "./RestaurantCard.css";

const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    locality,
    sla,
  } = resData;

  return (

    
    <div className="restaurant-card">

      
      <img
          className="restaurant-img"
          src={IMG_URL + cloudinaryImageId}
          alt={name}
        />
      

      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>

        <p className="restaurant-cuisine">
          {cuisines.slice(0, 3).join(", ")}
        </p>

        
          <span className="rating">⭐ {avgRating}</span>
          <span>{sla?.slaString}</span>
          <span>{costForTwo}</span>
        

        <p className="location">{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;