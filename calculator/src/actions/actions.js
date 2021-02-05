import {PLUS, CLEAR, DIVIDE, SUBTRACT, EQUAL, MULTIPLY, UPDATECURRENTVALUE, CLICKNUMBERBUTTON} from '../constants/actionTypes';

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
    return {
        type: UPDATECURRENTVALUE,
        value: event.data
    }
}
export function clickNumberButton(event) {
    console.log(event.data)
    return {
        type: CLICKNUMBERBUTTON,
        value: event.path[0].innerText
    }
}