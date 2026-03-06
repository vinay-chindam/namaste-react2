
import RestaurantCard from "./RestaurantCard ";
import "./RestaurantList.css";

const RestaurantList = ({filteredData}) => {
  

  return (
    <div className="restaurant-list">
      <div className="restaurant-container">
        {filteredData.map((res) => (
          <RestaurantCard key={res.info.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;