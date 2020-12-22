import { useState } from "react";
import "./App.css";
import fetchCityWeather from "./core/fetchCityWeather";
import fetchDetailedCityForecast from "./core/fetchDetailedCityForecast";
import deleteCityWeatherFromList from "./core/deleteCityWeatherFromList";
import CitySearchPanel from "./components/CitySearch/CitySearchPanel";
import CityWeatherPanel from "./components/CityWeather/CityWeatherPanel";

function App() {
  const [citiesAllIds, setCitiesAllIds] = useState([]);
  const [citiesById, setCitiesById] = useState(null);
  const [displayCityForecast, setDisplayCityForecast] = useState(null);
  const [errorApiMessage, setErrorApiMessage] = useState(null);

  const getCityWeatherClick = async (inputCity) => {
    const cityWeather = await fetchCityWeather(inputCity);
    if (cityWeather.cod === "404") {
      setErrorApiMessage(cityWeather.message);
      return;
    }
    addCityToTheState(cityWeather);
  };

  const addCityToTheState = (cityWeather) => {
    if (citiesAllIds.length === 8) {
      deleteCityFromList(citiesAllIds[citiesAllIds.length - 1]);
      if (
        displayCityForecast &&
        citiesAllIds[citiesAllIds.length - 1] === displayCityForecast.name
      ) {
        setDisplayCityForecast(null);
      }
    }

    setCitiesById((citiesById) => ({
      ...citiesById,
      [cityWeather.name]: cityWeather,
    }));
    setCitiesAllIds((citiesAllIds) => [cityWeather.name, ...citiesAllIds]);
  };

  const deleteCityFromList = (cityId) => {
    setCitiesAllIds((citiesAllIds) =>
      citiesAllIds.filter((city) => city !== cityId)
    );

    const updatedCityWeatherList = deleteCityWeatherFromList(
      citiesById,
      cityId
    );
    setCitiesById(updatedCityWeatherList);

    if (displayCityForecast && displayCityForecast.name === cityId) {
      setDisplayCityForecast(null);
    }
  };

  const handleShowDetailedCityForecast = async (cityInfo) => {
    const cityForecast = await fetchDetailedCityForecast(cityInfo);
    setDisplayCityForecast(cityForecast);
  };

  const updateCityWeather = async (cityId) => {
    const cityWeather = await fetchCityWeather(cityId);
    const citiesByIdCopy = { ...citiesById };
    citiesByIdCopy[cityWeather.name] = cityWeather;
    setCitiesById(citiesByIdCopy);
  };

  const closeErrorModal = () => {
    setErrorApiMessage(null);
  };

  const deleteAllCities = () => {
    setCitiesAllIds([]);
    setCitiesById(null);
    setDisplayCityForecast(null);
  };

  return (
    <div className="App">
      <CitySearchPanel
        citiesAllIds={citiesAllIds}
        citiesById={citiesById}
        errorApiMessage={errorApiMessage}
        closeErrorModal={closeErrorModal}
        getCityWeatherClick={getCityWeatherClick}
        deleteAllCities={deleteAllCities}
        deleteCityFromList={deleteCityFromList}
        updateCityWeather={updateCityWeather}
        handleShowDetailedCityForecast={handleShowDetailedCityForecast}
      />
      <div className="city-weather-panel">
        {displayCityForecast ? (
          <CityWeatherPanel
            displayCityForecast={displayCityForecast}
            handleShowDetailedCityForecast={handleShowDetailedCityForecast}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
