import {PLUS, CLEAR, DIVIDE, SUBTRACT, EQUAL, MULTIPLY, UPDATECURRENTVALUE, CLICKNUMBERBUTTON, BACKSPACECURRENTVALUE} from '../constants/actionTypes';

export function rootReducer (state, action) {
    switch (action.type) {
        case UPDATECURRENTVALUE: {
             return {
                currentValue: Number(String(state.currentValue) + action.value),
                previousValue: state.previousValue,
                operator: state.operator,
                changePreviousValue: true
            }
        }
        case BACKSPACECURRENTVALUE: {
            return {
                currentValue: deleteLastChar(),
                previousValue: state.previousValue,
                operator: state.operator,
                changePreviousValue: true
            }
        }
        case CLICKNUMBERBUTTON: {
            return {
                currentValue: Number(String(state.currentValue) + action.value),
                previousValue: state.previousValue,
                operator: state.operator,
                changePreviousValue: true
            }
        }
        case PLUS: {
            return {
                currentValue: 0,
                previousValue: updatePreviousValue(),
                operator: PLUS,
                changePreviousValue: true
            }
        }
        case SUBTRACT: {
            return {
                currentValue: 0,
                previousValue: updatePreviousValue(),
                operator: SUBTRACT,
                changePreviousValue: true
            }
        }
        case MULTIPLY: {
            return {
                currentValue: 0,
                previousValue: updatePreviousValue(),
                operator: MULTIPLY,
                changePreviousValue: true
            }
        }
        case DIVIDE: {
            return {
                currentValue: 0,
                previousValue: updatePreviousValue(),
                operator: DIVIDE,
                changePreviousValue: true
            }
        }
        case CLEAR: {
            return {
                currentValue: 0,
                previousValue: 0,
                operator: '',
                changePreviousValue: true
            }
        }
        case EQUAL: {
            return {
                currentValue: calculate(),
                previousValue: updatePreviousValueEqual(),
                operator: state.operator,
                changePreviousValue: false
            }
        }
        default: {
            return state;
        }
    }

    function deleteLastChar() {
        let result = String(state.currentValue).split('');
        result.pop();
        return Number(result.join(''));
    }

    function updatePreviousValueEqual () {
        if(state.currentValue && state.changePreviousValue){
            return state.currentValue
        }
        else return state.previousValue;
    }
    function updatePreviousValue () {
        if(state.currentValue){
            return state.currentValue
        }
        else return state.previousValue;
    }

    function calculate () {
        switch(state.operator) {
            case PLUS: return state.previousValue + state.currentValue;
            case SUBTRACT: {
                if (state.changePreviousValue) {
                    return state.previousValue - state.currentValue;
                }
                return state.currentValue - state.previousValue;
            }
            case MULTIPLY: {
                if(state.currentValue) {
                    return state.previousValue * state.currentValue;
                }
                return state.currentValue
            }
            case DIVIDE: {
                if(state.currentValue) {
                    if (state.changePreviousValue) {
                        return state.previousValue / state.currentValue;
                    }
                    return state.currentValue / state.previousValue;
                }
                return state.currentValue
            }
            default: return state.currentValue
        }
    }
}