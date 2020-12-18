import { useState, useEffect } from "react";
import "./App.css";
import CitySearchPanel from "./components/CitySearch/CitySearchPanel";
import CityWeatherPanel from "./components/CityWeather/CityWeatherPanel";

function App() {
  const apiKey = "c51223c219d6aec8cb8c5210449bd859";
  const weatherApi = "http://api.openweathermap.org/data/2.5/weather";

  const [citiesAllIds, setCitiesAllIds] = useState([]);
  const [citiesById, setCitiesById] = useState(null);

  const getCityWeatherClick = async (inputCity) => {
    await fetch(`${weatherApi}?q=${inputCity}&appid=${apiKey}`)
      .then((resp) => resp.json())
      .then((result) => {
        const citiesByIdCopy = { ...citiesById };
        citiesByIdCopy[result.name] = result;
        setCitiesById(citiesByIdCopy);
        setCitiesAllIds([...citiesAllIds, result.name]);
      });
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

  const updateCityWeather = async (cityId) => {
    await fetch(`${weatherApi}?q=${cityId}&appid=${apiKey}`)
      .then((resp) => resp.json())
      .then((result) => {
        const citiesByIdCopy = { ...citiesById };
        citiesByIdCopy[result.name] = result;
        setCitiesById(citiesByIdCopy);
      });
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
      />
      <CityWeatherPanel />
    </div>
  );
}

export default App;
