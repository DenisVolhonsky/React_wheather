import React from 'react';

import {Button} from 'react-materialize';
import './style.css'

const SearchForm = ({getWheather}) => {
    let input = '';

    const onFormSubmit = (event) => {
        event.preventDefault();
        getWheather(input.value);
        event.target.reset();
    }

        return(
            <form className="SearchField" onSubmit={onFormSubmit}>
                <span>Enter the city:</span>
                <input type="text" ref={node => (input=node)}/>
                <Button>Submit</Button>
            </form>
        );
}

export default  SearchForm;
