import React from 'react';
import {Button} from 'react-materialize';
import './style.css'

export default class SearchForm extends React.Component {

    _handleSubmit = (event) => {
        event.preventDefault();
        console.log('wow');
    }

    render() {
        return(
            <form className="SearchField" onSubmit={this._handleSubmit}>
                <span>Enter the city:</span>
                <input type="text"/>
                <Button>Submit</Button>
            </form>
        );
    }
}


