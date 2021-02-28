import {PLUS, CLEAR, DIVIDE, SUBTRACT, EQUAL, MULTIPLY, UPDATECURRENTVALUE, CLICKNUMBERBUTTON, BACKSPACECURRENTVALUE, ADDDOT} from '../constants/actionTypes';

export function plus() {
    return {
        type: PLUS
    }
}
export function clear() {
    return {
        type: CLEAR
    }
}
export function divide() {
    return {
        type: DIVIDE
    }
}
export function subtract() {
    return {
        type: SUBTRACT
    }
}
export function equal() {
    return {
        type: EQUAL
    }
}
export function multiply() {
    return {
        type: MULTIPLY
    }
}
export function updateCurrentValue(event) {
    if(event.data === '.') {
        return {
            type: ADDDOT,
            value: event.data
        }
    }
    if(event.inputType === "deleteContentBackward") {
        return {
            type: BACKSPACECURRENTVALUE
        }
    }
    if(event.data === "+"){
        return {
            type: PLUS
        }
    }
    if(event.data === "-"){
        return {
            type: SUBTRACT
        }
    }
    if(event.data === "*"){
        return {
            type: MULTIPLY
        }
    }
    if(event.data === "/"){
        return {
            type: DIVIDE
        }
    }
    if( event.data !== '1' &&
        event.data !== '2' &&
        event.data !== '3' &&
        event.data !== '4' &&
        event.data !== '5' &&
        event.data !== '6' &&
        event.data !== '7' &&
        event.data !== '8' &&
        event.data !== '9' &&
        event.data !== '0' ) {
            return {
                type: 'NOTANUMBER'
        }
    }
    return {
        type: UPDATECURRENTVALUE,
        value: event.data
    }
}
export function pressEnter(event) {
    if(event.key === "Enter"){
        return {
            type: EQUAL
        }
    } else {
        return {
            type: 'NOONE'
        }
    }
}
export function clickNumberButton(event) {
    return {
        type: CLICKNUMBERBUTTON,
        value: event.path[0].innerText
    }
}