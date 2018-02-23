import React from 'react';
import {Button} from 'react-materialize';
import './style.css'

const SearchField = ({getWheather}) => {
    let input = '';

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(input.value !== ''){
            getWheather(input.value);
        }
        event.target.reset();
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
