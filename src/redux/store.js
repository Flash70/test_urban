import {combineReducers, createStore} from 'redux';
import {loginReducer} from "./login";




const reducers = combineReducers({loginReducer});

export const store = createStore(reducers);