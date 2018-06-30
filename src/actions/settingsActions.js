import { GET_SETTINGS } from "./types";
import {
  localStorageSetItems,
  localStorageGetItems
} from "../helpers/localStorage";

// On App Load
// @desc Set up localStorage for all and settings reducer;

export const getSettings = () => dispatch => {
  const localStorage = localStorageGetItems();
  const settings = {
    pomodoro: localStorage.pomodoro,
    shortBreak: localStorage.shortBreak,
    longBreak: localStorage.longBreak
  };
  dispatch({
    type: GET_SETTINGS,
    payload: settings
  });
};

//  On Settings Submit
export const setSettings = (settings, history) => dispatch => {
  localStorageSetItems(settings);
  dispatch(getSettings());
  history.push("/");
};
