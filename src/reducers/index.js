import { combineReducers } from "redux";
import showOnOffReducers from "./showOnOffReducers";

const allReducers = combineReducers({
  profile: showOnOffReducers,
});

export default allReducers;
