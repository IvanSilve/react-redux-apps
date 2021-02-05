const React = require('react');
import {store} from '../../../Store/Store.js';
import {clickNumberButton} from '../../../actions/actions.js'
require('./ButtonsNumbers.css')

export class ButtonsNumbers extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="ButtonsNumbers">
                <button id="Button_1"
                        onClick = {() => store.dispatch(clickNumberButton(event))}
                >1</button>
                <button id="Button_2"
                        onClick = {() => store.dispatch(clickNumberButton(event))}
                >2</button>
                <button id="Button_3"
                        onClick = {() => store.dispatch(clickNumberButton(event))}
                >3</button>
                <button id="Button_4"
                        onClick = {() => store.dispatch(clickNumberButton(event))}
                >4</button>
                <button id="Button_5"
                        onClick = {() => store.dispatch(clickNumberButton(event))}
                >5</button>
                <button id="Button_6"
                        onClick = {() => store.dispatch(clickNumberButton(event))}
                >6</button>
                <button id="Button_7"
                        onClick = {() => store.dispatch(clickNumberButton(event))}
                >7</button>
                <button id="Button_8"
                        onClick = {() => store.dispatch(clickNumberButton(event))}
                >8</button>
                <button id="Button_9"
                        onClick = {() => store.dispatch(clickNumberButton(event))}
                >9</button>
                <button id="Button_0"
                        onClick = {() => store.dispatch(clickNumberButton(event))}
                >0</button>
            </div>
        )
    }
}