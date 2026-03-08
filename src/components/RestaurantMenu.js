import { useParams } from "react-router-dom";
import useFetch from "../utils/UseFetch";
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";

function RestaurantMenu() {

  const { resId } = useParams();

  const { data, loading, error } = useFetch(
    `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`
  );

  if (loading) return <Shimmer />;

  if (error) return <h2>Error loading menu</h2>;

  
  const restaurantInfo =
    data?.data?.cards?.[2]?.card?.card?.info;

  const menuItems =
    data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards?.[1]?.card?.card?.itemCards || [];

  if (!restaurantInfo) return <Shimmer />;

  return (
    <div className="menu-container">

      
      <div className="restaurant-header">
        <h1>{restaurantInfo.name}</h1>

        <p>{restaurantInfo.cuisines?.join(", ")}</p>

        <div className="restaurant-meta">
          <span>⭐ {restaurantInfo.avgRating}</span>
          <span>{restaurantInfo.costForTwo}</span>
          <span>{restaurantInfo.sla?.deliveryTime} mins</span>
        </div>
      </div>

     
      <div className="menu-items">
        {menuItems.map((item) => {
          const info = item.card.info;

          return (
            <div key={info.id} className="menu-card">

              <div className="menu-content">
                <h3>{info.name}</h3>

                <p className="description">
                  {info.description}
                </p>

                <p className="price">
                  ₹{(info.price || info.defaultPrice) / 100}
                </p>

                <button className="add-btn">Add</button>
              </div>

              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload+${info.imageId}`}
                alt={info.name}
              />

            </div>
          );
        })}
      </div>

    </div>
  );
}

export default RestaurantMenu;