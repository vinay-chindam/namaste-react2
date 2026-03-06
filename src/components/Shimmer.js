import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="restaurant-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>

            <div className="shimmer-info">
              <div className="shimmer-line title"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line short"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;