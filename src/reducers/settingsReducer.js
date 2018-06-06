import { GET_SETTINGS } from "../actions/types";
const initialState = {
  pomodoro: "0",
  shortBreak: "0",
  longBreak: "0"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SETTINGS: {
      const { pomodoro, shortBreak, longBreak } = action.payload;
      return {
        ...state,
        pomodoro,
        shortBreak,
        longBreak
      };
    }
    default: {
      return state;
    }
  }
}
