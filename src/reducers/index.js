import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer";
import countReducer from "./countReducer";
export default combineReducers({
  settings: settingsReducer,
  count: countReducer
});
