import React from "react";
import "./CityWeatherPanel.css";
import OneDayForecast from "./OneDayForecast";
import weatherIconMap from "../../core/weatherIconMap";

const CityWeatherPanel = ({
  displayCityForecast,
  handleShowDetailedCityForecast,
}) => {
  const currentCityWeather = displayCityForecast.current;
  const weatherIcon = currentCityWeather.weather[0].icon;
  const cityTemp = Math.floor(currentCityWeather.temp);
  const fiveDaysforecast = displayCityForecast.daily.slice(1, 6);

  return (
    <div className="city-weather-box">
      <div className="city-weather-panel-header">
        <h1>{displayCityForecast.name}</h1>
        <i
          className="btn refresh fas fa-sync-alt"
          onClick={() => handleShowDetailedCityForecast(displayCityForecast)}
        />
      </div>
      <div className="current-weather-container">
        <div className="current-weather-icon">
          <img src={weatherIconMap[weatherIcon]} alt="" />
        </div>
        <div className="current-weather-info">
          <p>{cityTemp} °C</p>
          <p>{currentCityWeather.weather[0].main}</p>
          <p>
            Wind: {currentCityWeather.wind_speed}ms,{" "}
            {currentCityWeather.wind_deg} deg
          </p>
          <p>Pressure: {currentCityWeather.pressure}</p>
        </div>
      </div>
      <div className="weather-forecast-container">
        <div className="weather-forecast">
          {fiveDaysforecast.map((dayForecast, id) => (
            <OneDayForecast key={id} dayForecast={dayForecast} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityWeatherPanel;
