const initialState = {
  pomodoro: "",
  shortBreak: "",
  longBreak: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_SETTINGS": {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
}
