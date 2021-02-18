import React, {useState} from 'react';
import {connect} from 'react-redux'
import {getWeather} from '../redux/actions/actions.js';
import {CITYNOTFOUND} from "../redux/constants/actionTypes";

require('./WeatherApp.css');
require('./WeatherDescriptionBackgrounds.css');

export function WeatherApp ({getWeather, weather}) {
    const [query, setQuery] = useState('');

    const changeInputHandler = event => {
        setQuery(event.target.value);
    }
    const clearInput = event => {
        if(event.key === "Enter") {
            setQuery("");
        }
    }

    const dateBuilder = (d) => {
     let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
     let days = ["Воскресенье","Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

     let day = days[d.getDay()];
     let date = d.getDate();
     let month = months[d.getMonth()];
     let year = d.getFullYear();

     return `${day} ${date} ${month} ${year}`
    }

    return (
        <div className={(weather !== null && weather !== CITYNOTFOUND) ? ((weather.main.temp > 10) ? 'warm-weather' : 'cold-weather') : 'warm-weather'}>
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Введите город..."
                        value ={query}
                        onChange={() => changeInputHandler(event)}
                        onKeyPress={() => {
                            getWeather(event);
                            clearInput(event);
                            }
                        }
                    />
                </div>
                {(weather && weather !== CITYNOTFOUND) ? (
                    <div className={weather.weather[0].description + " weatherBackground"}>
                        <div className="weather-container">
                            <div className="location-box">
                                <div className="location">{weather.name}, {weather.sys.country}</div>
                                <div className="date">{dateBuilder(new Date())}</div>
                            </div>
                            <div className="weather-box">
                                <div className="temp">
                                    {Math.round(weather.main.temp)}&#176;с
                                </div>
                                <div className="weather">{weather.weather[0].description}</div>
                            </div>
                        </div>
                    </div>
                ) : ((weather === CITYNOTFOUND) ? (
                    <div className="cityNotFound">
                        Город не найден
                    </div>
                ) : (''))}
            </main>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getWeather: event => dispatch(getWeather(event))
    }
}
const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(WeatherApp)

