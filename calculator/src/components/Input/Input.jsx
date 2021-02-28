const React = require ('react');
import {updateCurrentValue, pressEnter} from '../../actions/actions.js';
import {store} from '../../Store/Store.js';
require ('./Input.css');

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.sub = this.sub.bind(this);
    }
    sub () {
        store.subscribe(() => {
            let state = store.getState();
            this.inputRef.value = state.currentValue;
            this.inputRef.focus();
        })
    }
    componentDidMount() {
        this.sub();
        store.dispatch({type: "__INIT__"})
    }
    render() {
        return (
            <div className="Input">
                <input type="text"
                       ref ={input => {this.inputRef = input}}
                       onChange = {() => store.dispatch(updateCurrentValue(event))}
                       onKeyPress={() => store.dispatch(pressEnter(event))}
                />
            </div>
        )
    }
}

