

function settingsReducer(state = {
    pomodoro:0,
    break: 0,
    longBreak:0,  
}
, action) {
  switch(action.type){
/* Ex:
{
  type: ADD_TIME
  actionid: pomodoro
}
*/
    case 'ADD_TIME':
    case 'SUB_TIME': {
      //who do we add it to? Check action.timeType
      const newTime = timeReducer(state,action)
      const newTimeSetting = {
        ...state,
        newTime,
      }
    }
    default: {
      return state;
    }
  }
}
//var obj = { [variable]: 1 } 
function timeReducer(state = {}, action){
  switch(action.type){
    case 'ADD_TIME': {
      return Object.create({[state.timeType]:state.timeType +=1});
    }
  }
}