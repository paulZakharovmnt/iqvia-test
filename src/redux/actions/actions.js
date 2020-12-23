export const deleteAllCitiesFromState = () => {
  return {
    type: "DELETE_ALL_CITIES",
  };
};

export const addCityIdToList = (cityWeather) => {
  return {
    type: "ADD_CITY_TO_STATE",
    payload: cityWeather,
  };
};

export const updateCityWeatherToState = (cityWeather) => {
  return {
    type: "UPDATE_CITY_WEATHER",
    payload: cityWeather,
  };
};

export const deleteCity = (cityName) => {
  return {
    type: "DELETE_CITY",
    payload: cityName,
  };
};
