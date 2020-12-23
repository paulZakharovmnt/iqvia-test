import React from "react";
import weatherIconMap from "../../core/weatherIconMap";
import "./OneDayForecast.css";

const OneDayForecast = ({ dayForecast }) => {
  const weatherApiIcon = dayForecast.weather[0].icon;
  const temp = Math.floor(dayForecast.temp.day);
  const humanDateFormat = new Date(dayForecast.dt * 1000).toLocaleString(
    "en-US",
    {
      weekday: "short",
      day: "numeric",
    }
  );
  return (
    <div className="daily-forecast-container">
      <div className="day-and-date">{humanDateFormat}</div>

      <img src={weatherIconMap[weatherApiIcon]} alt="" />
      <p>{temp} °C</p>
    </div>
  );
};

export default OneDayForecast;
