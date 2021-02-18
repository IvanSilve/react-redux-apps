import React, {useState} from "react";
import {getWeather} from "../../redux/actions/actions";
import {connect} from 'react-redux'


function SearchBox({getWeather}) {
    const [query, setQuery] = useState('');

    const changeInputHandler = event => {
        setQuery(event.target.value);
    }
    const clearInput = event => {
        if(event.key === "Enter") {
            setQuery("");
        }
    }

    return (
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
    )
}
const mapDispatchToProps = dispatch => {
    return {
        getWeather: event => dispatch(getWeather(event))
    }
}
export default connect(null, mapDispatchToProps)(SearchBox)