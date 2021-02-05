const React = require ('react');
import {updateCurrentValue} from '../../actions/actions.js';
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
            this.inputRef.current.value= state.currentValue;
            console.log('current value: ' + state.currentValue)
            console.log('previous value: ' + state.previousValue)
        })
        //let state = store.getState();
    }
    componentDidMount() {
        this.sub();
    }
    render() {
        return (
            <div className="Input">
                <input type="number"
                       ref ={this.inputRef}
                       onChange = {() => store.dispatch(updateCurrentValue(event))}
                />
            </div>
        )
    }
}

