import React, { useState } from "react";
import City from "./City";
import "./CitySearchPanel.css";
import ErrorModal from "./ErrorModal/ErrorModal";

const CitySearchPanel = ({
  citiesAllIds,
  citiesById,
  errorApiMessage,
  closeErrorModal,
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
            updateCityWeather={updateCityWeather}
            deleteCityFromList={deleteCityFromList}
            handleShowDetailedCityForecast={handleShowDetailedCityForecast}
          />
        ))}

        {/* <div>City 2</div>
        <div>City 3</div> */}
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
