import React from "react";
import weatherIconMap from "../../core/weatherIconMap";
import "./OneDayForecast.css";

const OneDayForecast = ({ dayForecast }) => {
  const weatherApiIcon = dayForecast.weather[0].icon;
  const temp = Math.floor(dayForecast.temp.day);
  const date = dayForecast.dt * 1000;
  const dateObject = new Date(date);
  const humanDateFormat = dateObject.toLocaleString("en-US", {
    weekday: "short",
    day: "numeric",
  });

  //   console.log(humanDateFormat);
  return (
    <div className="daily-forecast-container">
      {humanDateFormat}
      <img src={weatherIconMap[weatherApiIcon]} alt="" />
      <p>{temp} C</p>
    </div>
  );
};

export default OneDayForecast;
