import {GETWEATHER, CITYNOTFOUND} from "../constants/actionTypes";
import {api} from "../../api/api.js"

export function getWeather(event) {
    if(event.key === 'Enter'){
        return function(dispatch){
                fetch(`${api.base}weather?q=${event.target.value}&units=metric&lang=ru&APPID=${api.key}`)
                    .then(response => response.json())
                    .then(result => {
                        if(result.cod === 200){
                            dispatch({
                                type: GETWEATHER,
                                value: result
                            })
                        }

                        if(result.cod === "404"){
                            dispatch({
                                type: CITYNOTFOUND
                            })
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    })
                    .then(() => {
                        dispatch({
                            type: "__NOONE__"
                        })
                    })
        }
    }
    else return {
            type: "__NOONE__"
        }
    }