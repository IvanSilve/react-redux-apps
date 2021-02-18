import {GETWEATHER, CITYNOTFOUND} from '../constants/actionTypes.js';

const initialState = {
    weather: null
};

export function weatherReducer (state = initialState, action) {
    switch(action.type){
        case GETWEATHER: return action.value
        case CITYNOTFOUND: return CITYNOTFOUND
        default: return state
    }


}