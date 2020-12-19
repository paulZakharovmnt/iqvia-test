import { weatherApi, apiKey } from "./weatherApi";

const fetchDetailedCityForecast = async (cityName) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`
  )
    .then((resp) => resp.json())
    .then((result) => console.log(result));
};

export default fetchDetailedCityForecast;
