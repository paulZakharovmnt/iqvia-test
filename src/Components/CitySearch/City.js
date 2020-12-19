import React from "react";
import "./City.css";

const City = ({
  citiesById,
  cityId,
  deleteCityFromList,
  updateCityWeather,
  handleShowDetailedCityForecast,
}) => {
  const cityInfo = citiesById[cityId];

  return (
    <div className="city">
      <div
        onClick={() => handleShowDetailedCityForecast(cityInfo)}
        className="city-data"
      >
        <h3>{cityInfo.name}</h3>
        <p>- 12 C</p>
        <p>Cloudy</p>
        <p>Icon?</p>
      </div>
      <div className="city-control-icons">
        <i
          className="fas fa-sync-alt"
          onClick={() => updateCityWeather(cityId)}
        />
        <i
          className="fas fa-times"
          onClick={() => deleteCityFromList(cityId)}
        />
      </div>
    </div>
  );
};

export default City;
