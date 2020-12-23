import { combineReducers } from "redux";
import citiesAllIdsReducer from "./citiesAllIdsReducer";
import citiesByIdReducer from "./citiesByIdReducer";

const allReducers = combineReducers({
  citiesAllIds: citiesAllIdsReducer,
  citiesById: citiesByIdReducer,
});

export default allReducers;
