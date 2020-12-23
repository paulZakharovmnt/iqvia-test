const citiesAllIdsReducer = (state = [], action) => {
  switch (action.type) {
    case "DELETE_ALL_CITIES":
      return [];
    case "ADD_CITY_TO_STATE":
      return [action.payload.name, ...state];
    case "DELETE_CITY":
      return state.filter((cityName) => cityName !== action.payload);
    default:
      return state;
  }
};

export default citiesAllIdsReducer;
