import React from 'react';
import {connect} from 'react-redux'
import {CITYNOTFOUND} from "../redux/constants/actionTypes";
import SearchBox from "./SearchBox/SearchBox";
import Weather from "./Weather/Weahter";

require('./WeatherApp.css');
require('./WeatherDescriptionBackgrounds.css');

function WeatherApp ({weather}) {
    return (
        <div className={(weather !== null && weather !== CITYNOTFOUND) ? ((weather.main.temp > 10) ? 'warm-weather' : 'cold-weather') : 'warm-weather'}>
            <main>
               <SearchBox />
                <Weather />
            </main>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherApp);

