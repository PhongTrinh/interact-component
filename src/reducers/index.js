import { combineReducers } from "redux";
import showOnOffReducers from "./showOnOffReducers";

const allReducers = combineReducers({
  flag: showOnOffReducers,
});

export default allReducers;
