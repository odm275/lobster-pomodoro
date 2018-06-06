const initialState = {
  pomodoroCount: 0,
  shortBreakCount: 0,
  longBreakCount: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
