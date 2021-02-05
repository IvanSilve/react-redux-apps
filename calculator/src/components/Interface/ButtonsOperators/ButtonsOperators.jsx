const React = require('react');
import {clear, divide, equal, multiply, plus, subtract} from '../../../actions/actions.js';
import {store} from '../../../Store/Store.js';
require('./ButtonsOperators.css')

export class ButtonsOperators extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="ButtonsOperators">
                <button id="Button_clear"
                        onClick = {() => store.dispatch( clear() )}
                >C</button>
                <button id="Button_divide"
                        onClick = {() => store.dispatch( divide() )}
                >/</button>
                <button id="Button_multiply"
                        onClick = {() => store.dispatch( multiply() )}
                >*</button>
                <button id="Button_plus"
                        onClick = {() => store.dispatch( plus() )}
                >+</button>
                <button id="Button_subtract"
                        onClick = {() => store.dispatch( subtract() )}
                >-</button>
                <button id="Button_equal"
                        onClick = {() => store.dispatch( equal() )}
                >=</button>
            </div>
        )
    }
}
