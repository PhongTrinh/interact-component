import { SHOW_ON_OFF } from "./types";

export const showOnOff = (flag) => {
  return {
    type: SHOW_ON_OFF,
    payload: flag,
  };
};
