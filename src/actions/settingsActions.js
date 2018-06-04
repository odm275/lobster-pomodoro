import { GET_SETTINGS } from "./types";
import {
  localStorageSetItems,
  localStorageGetItems
} from "../helpers/localStorage";

//  On App Load
export const getSettings = () => dispatch => {
  const data = localStorageGetItems();
  dispatch({
    GET_SETTINGS,
    payload: data
  });
};

//  On Settings Submit
export const setSettings = (settingsData, history) => dispatch => {
  localStorageSetItems(settingsData);
  history.push("/");
};
