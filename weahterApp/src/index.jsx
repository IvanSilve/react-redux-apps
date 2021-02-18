import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import WeatherApp from './components/WeatherApp.jsx';
import {rootReducer} from './redux/reducers/rootReducer.js';

const store = createStore(rootReducer,
    {
        weather: null
    },
    applyMiddleware(thunk)
);
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <WeatherApp />
    </Provider>,
    document.getElementById('root')
)