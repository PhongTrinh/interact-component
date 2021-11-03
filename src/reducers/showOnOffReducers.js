import { SHOW_ON_OFF } from "../actions/types";

const initialState = {
  flag: false,
};

export default function showOnOffReducers(state = initialState, action) {
  switch (action.type) {
    case SHOW_ON_OFF:
      console.log("Reducer " + action.payload.flag);
      return {
        ...state,
        flag: action.payload.flag,
      };
    default:
      return state;
  }
}
