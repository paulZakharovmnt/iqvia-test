import React from "react";
import weatherIconMap from "../../core/weatherIconMap";
import "./City.css";

const City = ({
  citiesById,
  cityId,
  deleteCityFromList,
  updateCityWeather,
  handleShowDetailedCityForecast,
}) => {
  const cityInfo = citiesById[cityId];
  const cityWeather = cityInfo.weather[0];

  return (
    <div className="city">
      <div
        onClick={() => handleShowDetailedCityForecast(cityInfo)}
        className="city-data"
      >
        <h2>{cityInfo.name}</h2>
        <p>{Math.floor(cityInfo.main.temp)} °C</p>
        <p>{cityWeather.description}</p>
        <img src={weatherIconMap[cityWeather.icon]} alt="" />
      </div>
      <div className="city-control-icons">
        <i
          className="btn refresh fas fa-sync-alt"
          onClick={() => updateCityWeather(cityId)}
        />
        <i
          className="btn delete fas fa-times"
          onClick={() => deleteCityFromList(cityId)}
        />
      </div>
    </div>
  );
};

export default City;
