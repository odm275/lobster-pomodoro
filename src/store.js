import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
    //settings: settingsReducer,
    //data: dataReducer,   
    //time: timeReducer,
});

export default createStore(reducer);