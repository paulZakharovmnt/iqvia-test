import { weatherApi, apiKey } from "./weatherApi";

const fetchDetailedCityForecast = async (cityInfo) => {
  const apiOptions = "exclude=minutely,hourly,alerts&units=metric";
  return await fetch(
    `${weatherApi}onecall?lat=${cityInfo.coord.lat}&lon=${cityInfo.coord.lon}&${apiOptions}&appid=${apiKey}`
  )
    .then((resp) => resp.json())
    .then((result) => ({
      current: result.current,
      daily: result.daily,
      coord: { lat: result.lat, lon: result.lon },
      name: cityInfo.name,
    }));
};

export default fetchDetailedCityForecast;
