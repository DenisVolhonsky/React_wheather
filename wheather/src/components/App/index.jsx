import React from 'react';
import Header from 'components/Header';
import SearchForm from 'components/SearchForm';
import CurrentWheather from 'components/CurrentWheather';

export default class App extends React.Component {

    state = {
        name:'',
        temp:null,
        humidity:null,
        pressure:null,
        visibility:null,
        wind:null,
        clouds:'',
        icon: null

    };


    currentFormSubmit = (query) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=ee60a56d516461352f04a28877459c45`)
            .then(response=>{
                if(response.ok) return response.json();
                throw new Error('Fetching error'+ response.statusText);
            })
            .then(data => {
                this.setState({
                    name: data.name,
                    temp: Math.round(data.main.temp-273),
                    humidity: data.main.humidity,
                    pressure: Math.round(data.main.pressure*0.75),
                    visibility: data.visibility/1000,
                    wind: data.wind.speed,
                    clouds: data.weather[0].description,
                    icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
                });
            })
            .catch(err => console.log(err));
    }



    componentWillMount = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev&APPID=ee60a56d516461352f04a28877459c45`)
            .then(response=>{
                if(response.ok) return response.json();
                throw new Error('Fetching error'+ response.statusText);
            })
            .then(data => {
                this.setState({
                    name: data.name,
                    temp: Math.round(data.main.temp-273),
                    humidity: data.main.humidity,
                    pressure: Math.round(data.main.pressure*0.75),
                    visibility: data.visibility/1000,
                    wind: data.wind.speed,
                    clouds: data.weather[0].description,
                    icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return(
            <div className="container">
                <Header />
                <SearchForm getWheather={this.currentFormSubmit}/>
                <CurrentWheather {...this.state} />
            </div>
        );
    }
}