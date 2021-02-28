import {MULTIPLY, PLUS, DIVIDE, SUBTRACT} from "../../constants/actionTypes";

const React = require ('react');
import {store} from '../../Store/Store.js';
require ('./operations.css');

export class Operations extends React.Component {
    constructor(props) {
        super(props);
        this.sub = this.sub.bind(this);
        this.currentValue = React.createRef();
        this.operator = React.createRef();
        this.previousValue = React.createRef();
    }
    sub() {
        store.subscribe(() => {
            let State = store.getState();
            let currentValue = State.currentValue;
            let operator = State.operator;
            let previousValue = State.previousValue;
            let changePreviousValue = State.changePreviousValue;

            if(!changePreviousValue) {
                this.currentValue.innerText = "= " + currentValue;
            } else {
                this.currentValue.innerText = currentValue;
            }


                switch(operator){
                    case PLUS: {
                        this.operator.innerText = "+";
                        break
                    }
                    case MULTIPLY: {
                        this.operator.innerText = "*";
                        break
                    }
                    case DIVIDE: {
                        this.operator.innerText = "/";
                        break
                    }
                    case SUBTRACT: {
                        this.operator.innerText = "-";
                        break
                    }
                    case "": {
                        this.operator.innerText = "";
                        break
                    }
                }

            if(!previousValue) {
                this.previousValue.innerText = ""
            } else {
                this.previousValue.innerText = previousValue;
            }

        })

    }
    componentDidMount() {
        this.sub();
        store.dispatch({type: "__INIT__"})
    }
    render() {
        return (
            <div
                className="operations"
            >
                <ul>
                    <li ref = {li => {this.previousValue = li}}></li>
                    <li ref = {li => {this.operator = li}}></li>
                    <li ref = {li => {this.currentValue = li}}></li>
                </ul>
            </div>
        )
    }
}