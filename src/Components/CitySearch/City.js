import React from "react";
import "./City.css";

const City = ({ citiesById, cityId }) => {
  const cityInfo = citiesById[cityId];

  return (
    <div className="city">
      <div className="city-data">
        <h3>{cityInfo.name}</h3>
        <p>- 12 C</p>
        <p>Cloudy</p>
        <p>Icon?</p>
      </div>
      <div className="city-control-icons">
        <div>Update</div>
        <div>Delete</div>
      </div>
    </div>
  );
};

export default City;
