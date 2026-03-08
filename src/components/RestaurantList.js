
import RestaurantCard from "./RestaurantCard ";
import "./RestaurantList.css";
import { Link } from "react-router-dom";

const RestaurantList = ({filteredData}) => {
  

  return (
    <div className="restaurant-list">
      <div className="restaurant-container">
        {filteredData.map((res) => (
          <Link className="restaurant-link" key={res.info.id}
             to={`/restaurant/${res.info.id}`}> 
        
              <RestaurantCard  resData={res.info} />
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;