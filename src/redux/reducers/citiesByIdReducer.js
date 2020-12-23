import deleteCityWeatherFromList from "../../core/deleteCityWeatherFromList";

const citiesByIdReducer = (state = null, action) => {
  switch (action.type) {
    case "DELETE_ALL_CITIES":
      return null;
    case "ADD_CITY_TO_STATE":
      return { ...state, [action.payload.name]: action.payload };
    case "UPDATE_CITY_WEATHER":
      return { ...state, [action.payload.name]: action.payload };
    case "DELETE_CITY":
      const updatedCityWeatherList = deleteCityWeatherFromList(
        state,
        action.payload
      );
      return updatedCityWeatherList;
    default:
      return state;
  }
};

export default citiesByIdReducer;
