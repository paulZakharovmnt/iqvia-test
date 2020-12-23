import React from "react";
import weatherIconMap from "../../core/weatherIconMap";
import "./City.css";

const City = ({
  citiesById,
  cityId,
  handleDeleteCityFromListClick,
  handleUpdateCityWeatherClick,
  handleFetchDetailedCityForecast,
}) => {
  const cityInfo = citiesById[cityId];
  const cityWeather = cityInfo.weather[0];
  const temp = Math.floor(cityInfo.main.temp);

  return (
    <div className="city">
      <div
        onClick={() => handleFetchDetailedCityForecast(cityInfo)}
        className="city-data"
      >
        <h2>{cityInfo.name}</h2>
        <p>{temp} °C</p>
        <p>{cityWeather.description}</p>
        <img src={weatherIconMap[cityWeather.icon]} alt="" />
      </div>
      <div className="city-control-icons">
        <i
          className="btn refresh fas fa-sync-alt"
          onClick={() => handleUpdateCityWeatherClick(cityId)}
        />
        <i
          className="btn delete fas fa-times"
          onClick={() => handleDeleteCityFromListClick(cityId)}
        />
      </div>
    </div>
  );
};

export default City;
