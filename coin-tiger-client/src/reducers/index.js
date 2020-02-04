import watchListReducer from "./WatchList";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  watchList: watchListReducer,
  isLogged: isLoggedReducer
});
export default allReducers;
