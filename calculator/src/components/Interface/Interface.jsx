const React = require ('react');
import {ButtonsNumbers} from './ButtonsNumbers/ButtonsNumbers.jsx';
import {ButtonsOperators} from'./ButtonsOperators/ButtonsOperators.jsx';
require('./Interface.css');

export class Interface extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Interface">
                <ButtonsNumbers>
                </ButtonsNumbers>
                <ButtonsOperators>
                </ButtonsOperators>
            </div>
        )
    }
}