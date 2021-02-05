import {createStore} from 'redux';
import {rootReducer} from '../reducers/rootReducer.js';

export const store = createStore(rootReducer, {
    currentValue: 0,
    previousValue: 0,
    operator: '',
    changePreviousValue: true,
});