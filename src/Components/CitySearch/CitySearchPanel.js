import React, { useState } from "react";
import City from "./City";
import "./CitySearchPanel.css";
import ErrorModal from "./ErrorModal/ErrorModal";

const CitySearchPanel = ({
  citiesAllIds,
  citiesById,
  errorApiMessage,
  closeErrorModal,
  deleteAllCities,
  handleFetchCityWeatherClick,
  handleDeleteCityFromListClick,
  handleUpdateCityWeatherClick,
  handleFetchDetailedCityForecast,
}) => {
  const [inputCitySearch, setInputCitySearch] = useState("");

  const submitCitySearchInput = () => {
    handleFetchCityWeatherClick(inputCitySearch);
    setInputCitySearch("");
  };
  return (
    <div className="city-search-panel">
      {errorApiMessage && (
        <ErrorModal
          errorApiMessage={errorApiMessage}
          closeErrorModal={closeErrorModal}
        />
      )}
      <div className="city-search-input-container">
        <input
          value={inputCitySearch}
          onChange={(event) => setInputCitySearch(event.target.value)}
        />
        <i
          className="btn add-city fas fa-plus"
          onClick={submitCitySearchInput}
        />
      </div>
      <div className="list-of-cities">
        <p>Recent Locations</p>
        {citiesAllIds.map((city) => (
          <City
            key={city}
            cityId={city}
            citiesById={citiesById}
            handleUpdateCityWeatherClick={handleUpdateCityWeatherClick}
            handleDeleteCityFromListClick={handleDeleteCityFromListClick}
            handleFetchDetailedCityForecast={handleFetchDetailedCityForecast}
          />
        ))}
      </div>
      <div className="clear-btn-container">
        <div className="clear-btn" onClick={deleteAllCities}>
          Clear
        </div>
      </div>
    </div>
  );
};

export default CitySearchPanel;
