import React from 'react';
import Header from 'components/Header';
import SearchForm from 'components/SearchForm';
import CurrentWheather from 'components/CurrentWheather';
import {fetchData} from 'API'

export default class App extends React.Component {

    state = {
        wheatherItems:[]
    };

    currentFormSubmit = city => {
        fetchData(city).then(data => {
            this.setState({
                wheatherItems: data
            });
        });

    }

    componentWillMount = () => {
        fetchData('Kiev').then(data => {
            this.setState({
                wheatherItems: data
            });
        });
    }

    render() {
        const {wheatherItems} = this.state;
        return(
            <div className="container">
                <Header />
                <SearchForm getWheather={this.currentFormSubmit}/>
                <CurrentWheather {...wheatherItems}/>
            </div>
        );
    }
}