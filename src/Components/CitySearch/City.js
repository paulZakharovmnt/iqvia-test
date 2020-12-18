import React from "react";
import "./City.css";

const City = ({
  citiesById,
  cityId,
  deleteCityFromList,
  updateCityWeather,
}) => {
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
        <div onClick={() => updateCityWeather(cityId)}>Update</div>
        <div onClick={() => deleteCityFromList(cityId)}>Delete</div>
      </div>
    </div>
  );
};

export default City;
