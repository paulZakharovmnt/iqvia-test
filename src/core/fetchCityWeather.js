import { weatherApi, apiKey } from "./weatherApi";

const fetchCityWeather = async (inputCity) => {
  return await fetch(
    `${weatherApi}weather?q=${inputCity}&units=metric&appid=${apiKey}`
  )
    .then((resp) => resp.json())
    .then((result) => {
      return result;
    });
};

export default fetchCityWeather;
