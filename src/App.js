import { useState } from "react";
import "./App.css";
import fetchCityWeather from "./core/fetchCityWeather";
import fetchDetailedCityForecast from "./core/fetchDetailedCityForecast";
import CitySearchPanel from "./components/CitySearch/CitySearchPanel";
import CityWeatherPanel from "./components/CityWeather/CityWeatherPanel";
import { useSelector, useDispatch } from "react-redux";

import {
  addCityIdToList,
  deleteCity,
  updateCityWeatherToState,
  deleteAllCitiesFromState,
} from "./redux/actions/actions";

function App() {
  const [detailedCityForecast, setDetailedCityForecast] = useState(null);
  const [errorApiMessage, setErrorApiMessage] = useState(null);

  const citiesAllIds = useSelector((state) => state.citiesAllIds);
  const citiesById = useSelector((state) => state.citiesById);

  const dispatch = useDispatch();

  const handleFetchCityWeatherClick = async (inputCity) => {
    const cityWeather = await fetchCityWeather(inputCity);
    if (cityWeather.cod === "404") {
      setErrorApiMessage(cityWeather.message);
      return;
    }
    addCityToTheState(cityWeather);
  };

  const addCityToTheState = (cityWeather) => {
    if (citiesAllIds.length === 8) {
      const lastCityInList = citiesAllIds[citiesAllIds.length - 1];
      handleDeleteCityFromListClick(lastCityInList);

      if (
        detailedCityForecast &&
        lastCityInList === detailedCityForecast.name
      ) {
        setDetailedCityForecast(null);
      }
    }

    dispatch(addCityIdToList(cityWeather));
  };

  const handleDeleteCityFromListClick = (cityId) => {
    dispatch(deleteCity(cityId));
    if (detailedCityForecast && detailedCityForecast.name === cityId) {
      setDetailedCityForecast(null);
    }
  };

  const handleFetchDetailedCityForecast = async (cityInfo) => {
    const cityForecast = await fetchDetailedCityForecast(cityInfo);
    setDetailedCityForecast(cityForecast);
  };

  const handleUpdateCityWeatherClick = async (cityId) => {
    const cityWeather = await fetchCityWeather(cityId);
    dispatch(updateCityWeatherToState(cityWeather));
  };

  const closeErrorModal = () => {
    setErrorApiMessage(null);
  };

  const deleteAllCities = () => {
    dispatch(deleteAllCitiesFromState());
    setDetailedCityForecast(null);
  };

  return (
    <div className="App">
      <CitySearchPanel
        citiesAllIds={citiesAllIds}
        citiesById={citiesById}
        errorApiMessage={errorApiMessage}
        closeErrorModal={closeErrorModal}
        deleteAllCities={deleteAllCities}
        handleFetchCityWeatherClick={handleFetchCityWeatherClick}
        handleDeleteCityFromListClick={handleDeleteCityFromListClick}
        handleUpdateCityWeatherClick={handleUpdateCityWeatherClick}
        handleFetchDetailedCityForecast={handleFetchDetailedCityForecast}
      />
      <div className="city-weather-panel">
        {detailedCityForecast ? (
          <CityWeatherPanel
            detailedCityForecast={detailedCityForecast}
            handleFetchDetailedCityForecast={handleFetchDetailedCityForecast}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
