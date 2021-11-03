import { SHOW_ON_OFF } from "../actions/types";

const initialState = {
  flag: "false",
};

export default function showOnOffReducers(state = initialState, action) {
  switch (action.type) {
    case SHOW_ON_OFF:
      console.log("Reducer " + action.payload.flag);
      // const payloadFlg = action.payload.flag === "false" ? "true" : "false";
      return {
        // the action.payload is the song parameter we passed in addSong function
        flag: action.payload.flag,
      };
    default:
      return state;
  }
}
