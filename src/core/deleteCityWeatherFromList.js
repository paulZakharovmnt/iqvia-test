const deleteCityWeatherFromList = (citiesById, cityId) => {
  return Object.keys(citiesById).reduce((obj, key) => {
    if (key !== cityId) {
      obj[key] = citiesById[key];
    }
    return obj;
  }, {});
};

export default deleteCityWeatherFromList;
