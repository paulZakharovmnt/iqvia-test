import { useState, useEffect } from "react";
import "./App.css";
import CitySearchPanel from "./components/CitySearch/CitySearchPanel";
import CityWeatherPanel from "./components/CityWeather/CityWeatherPanel";

function App() {
  const apiKey = "c51223c219d6aec8cb8c5210449bd859";
  const weatherApi = "http://api.openweathermap.org/data/2.5/weather";

  const [citiesAllIds, setCitiesAllIds] = useState([]);
  const [citiesById, setCitiesById] = useState(null);

  const getCityWeatherClick = (inputCity) => {
    fetch(`${weatherApi}?q=${inputCity}&appid=${apiKey}`)
      .then((resp) => resp.json())
      .then((result) => {
        setCitiesAllIds([...citiesAllIds, result.name]);
        const citiesByIdCopy = { ...citiesById };
        citiesByIdCopy[result.name] = result;
        // console.log(citiesByIdCopy);
      });
  };
  return (
    <div className="App">
      <CitySearchPanel
        citiesAllIds={citiesAllIds}
        citiesById={citiesById}
        getCityWeatherClick={getCityWeatherClick}
      />
      <CityWeatherPanel />
    </div>
  );
}

export default App;
