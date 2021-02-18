import {combineReducers} from "redux";
import {weatherReducer} from './weatherReducer.js';


export const rootReducer = combineReducers({weather: weatherReducer});