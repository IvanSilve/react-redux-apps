const ReactDOM = require ('react-dom');
const React = require ('react');
import {Calculator} from './Components/Calculator.jsx';
require('./main.css');

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)