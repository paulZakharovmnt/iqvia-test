import React, { useState } from "react";
import City from "./City";
import "./CitySearchPanel.css";

const CitySearchPanel = ({ getCityWeatherClick }) => {
  const [inputCitySearch, setInputCitySearch] = useState("");

  const submitCitySearchInput = () => {
    getCityWeatherClick(inputCitySearch);
    setInputCitySearch("");
  };
  return (
    <div className="city-search-panel">
      <div className="city-search-input-container">
        <input
          value={inputCitySearch}
          onChange={(event) => setInputCitySearch(event.target.value)}
        />
        <div onClick={submitCitySearchInput}> plus icon</div>
      </div>
      <div className="list-of-cities">
        <City />
        <div>City 2</div>
        <div>City 3</div>
      </div>
      <div className="clear-btn-container">Clear BTN</div>
    </div>
  );
};

export default CitySearchPanel;
