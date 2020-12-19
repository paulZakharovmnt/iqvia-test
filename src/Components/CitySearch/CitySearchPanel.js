import React, { useState } from "react";
import City from "./City";
import "./CitySearchPanel.css";

const CitySearchPanel = ({
  citiesAllIds,
  citiesById,
  getCityWeatherClick,
  deleteAllCities,
  deleteCityFromList,
  updateCityWeather,
  handleShowDetailedCityForecast,
}) => {
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
        <i className="fas fa-plus" onClick={submitCitySearchInput} />
      </div>
      <div className="list-of-cities">
        {citiesAllIds.map((city) => (
          <City
            key={city}
            cityId={city}
            citiesById={citiesById}
            updateCityWeather={updateCityWeather}
            deleteCityFromList={deleteCityFromList}
            handleShowDetailedCityForecast={handleShowDetailedCityForecast}
          />
        ))}

        {/* <div>City 2</div>
        <div>City 3</div> */}
      </div>
      <div className="clear-btn-container">
        <p onClick={deleteAllCities}>Clear</p>
      </div>
    </div>
  );
};

export default CitySearchPanel;
