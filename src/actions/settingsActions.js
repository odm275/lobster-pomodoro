import { GET_SETTINGS } from "./types";
import {
  localStorageSetItems,
  localStorageGetItems
} from "../helpers/localStorage";

//  On App Load
export const getSettings = () => dispatch => {
  const settings = localStorageGetItems();
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
