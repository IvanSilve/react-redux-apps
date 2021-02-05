const React = require ('react');
import {Input} from './Input/Input.jsx';
import {Interface} from './Interface/Interface.jsx';
require('./Calculator.css');

export class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Calculator">
                <Input>
                </Input>
                <Interface>
                </Interface>
            </div>
        )
    }
}
