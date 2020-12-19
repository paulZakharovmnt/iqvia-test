import { weatherApi, apiKey } from "./weatherApi";

const fetchCityWeather = async (inputCity) => {
  return await fetch(`${weatherApi}?q=${inputCity}&appid=${apiKey}`)
    .then((resp) => resp.json())
    .then((result) => {
      return result;
    });
};

export default fetchCityWeather;
