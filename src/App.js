import { useState, useEffect } from "react";
import "./App.css";
import fetchCityWeather from "./core/fetchCityWeather";
import fetchDetailedCityForecast from "./core/fetchDetailedCityForecast";
import CitySearchPanel from "./components/CitySearch/CitySearchPanel";
import CityWeatherPanel from "./components/CityWeather/CityWeatherPanel";

function App() {
  const apiKey = "c51223c219d6aec8cb8c5210449bd859";
  const weatherApi = "http://api.openweathermap.org/data/2.5/weather";

  const [citiesAllIds, setCitiesAllIds] = useState([]);
  const [citiesById, setCitiesById] = useState(null);
  const [displayCityForecast, setDisplayCityForecast] = useState(null);

  const getCityWeatherClick = async (inputCity) => {
    const cityWeather = await fetchCityWeather(inputCity);

    const citiesByIdCopy = { ...citiesById };
    citiesByIdCopy[cityWeather.name] = cityWeather;
    setCitiesById(citiesByIdCopy);
    setCitiesAllIds([...citiesAllIds, cityWeather.name]);
  };
  const deleteCityFromList = (cityId) => {
    const citiesAllIdsCopy = citiesAllIds.filter((city) => city !== cityId);
    setCitiesAllIds(citiesAllIdsCopy);

    const citiesByIdCopy = Object.keys(citiesById).reduce((obj, key) => {
      if (key !== cityId) {
        obj[key] = citiesById[key];
      }
      return obj;
    }, {});
    setCitiesById(citiesByIdCopy);
  };

  const handleShowDetailedCityForecast = async (cityInfo) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${cityInfo.coord.lat}&lon=${cityInfo.coord.lon}&exclude={part}&appid=c51223c219d6aec8cb8c5210449bd859`
    )
      .then((resp) => resp.json())
      .then((result) => console.log(result));
    // const detailedWeatherForecast = fetchDetailedCityForecast(cityName);
  };

  const updateCityWeather = async (cityId) => {
    const cityWeather = await fetchCityWeather(cityId);
    const citiesByIdCopy = { ...citiesById };
    citiesByIdCopy[cityWeather.name] = cityWeather;
    setCitiesById(citiesByIdCopy);
  };

  const deleteAllCities = () => {
    setCitiesAllIds([]);
    setCitiesById(null);
  };

  return (
    <div className="App">
      <CitySearchPanel
        citiesAllIds={citiesAllIds}
        citiesById={citiesById}
        getCityWeatherClick={getCityWeatherClick}
        deleteAllCities={deleteAllCities}
        deleteCityFromList={deleteCityFromList}
        updateCityWeather={updateCityWeather}
        handleShowDetailedCityForecast={handleShowDetailedCityForecast}
      />
      <CityWeatherPanel displayCityForecast={displayCityForecast} />
    </div>
  );
}

export default App;
