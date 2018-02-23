import React from 'react';
import {Button} from 'react-materialize';
import './style.css'

const SearchField = ({getWheather}) => {
    let input = '';

    const onFormSubmit = (event) => {
        event.preventDefault();  // denied sending form
        if(input.value !== ''){   // checking for
            getWheather(input.value);  // transfering input.value to currentFormSubmit in App.jsx
        }
        event.target.reset(); // reset input value after submit
    }

        return(
            <form className="SearchField" onSubmit={onFormSubmit}>
                <span>Enter the city:</span>
                <input type="text" ref={node => (input=node)}/>
                <Button className="waves-effect waves-light btn-large">Submit</Button>
            </form>
        );
}

export default  SearchField;
