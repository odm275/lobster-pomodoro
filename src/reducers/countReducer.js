import { GET_COUNTS } from "../actions/types";

const initialState = {
  longBreakCount: "0",
  shortBreakCount: "0",
  pomodoroCount: "0"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTS: {
      const { pomodoroCount, shortBreakCount, longBreakCount } = action.payload;
      return {
        ...state,
        pomodoroCount,
        shortBreakCount,
        longBreakCount
      };
    }
    default: {
      return state;
    }
  }
}
