import React from 'react';
import './style.css'
import Header from 'components/Header';
import SearchBlock from 'components/SearchBlock';
import SearchField from 'components/SearchField';
import CurrentWheather from 'components/CurrentWheather';
import ForecastWheather from 'components/ForecastWheather';
import FavoriteList from 'components/FavoriteList';
import Error from 'components/Error';
import Footer from 'components/Footer';
import {fetchData, fetchDataForecast, fetchDataFavorite, fetchDataGeo, fetchDataForecastGeo, coords} from 'API';

export default class App extends React.Component {

    state = {
        weatherItems:[],
        weatherItemsForecast:[],
        favoriteItems:[],
    };

    changeCity = city => {
        fetchData(city, 'weather').then(data => {
            this.setState({
                weatherItems: data
            });
        });
        fetchDataForecast(city).then(data => {
            this.setState({
                weatherItemsForecast: data
            });
        });
    }

    onDeleteTodo = id => {    // delete for favorite list
        this.setState({
            favoriteItems: this.state.favoriteItems.filter(post => post.id !== id)
        });
    }

    currentFormSubmit = city => {    // handle changing weather
        fetchData(city, 'weather').then(data => {  // handle current changing weather
                this.setState({
                    weatherItems: data
                });
        });
        fetchDataForecast(city).then(data => { // handle forecast changing weather
            this.setState({
                weatherItemsForecast: data
            });
        });
        fetchDataFavorite(city).then(data => { // adding to favorite weather
            this.setState({
                favoriteItems: [...this.state.favoriteItems, data]
            });
        });
    }

    componentWillMount = () => {
        coords()              // defolt weather from geolocation
            .then(response => {
                fetchDataGeo(...response).then(data => {  // defolt current weather
                    this.setState({weatherItems: data});
                });
                fetchDataForecastGeo(...response).then(data => {  // defolt forecast weather
                    this.setState({weatherItemsForecast: data});
                });
            })
            .catch(response => console.error(response));

        let favorite = localStorage.getItem('favoriteItems');
            this.setState({
                favoriteItems: JSON.parse(favorite)
            });
    }

    render() {
        const {weatherItems, weatherItemsForecast, favoriteItems} = this.state;
        localStorage.setItem('favoriteItems',JSON.stringify(favoriteItems));
        if(weatherItems === undefined || weatherItemsForecast === undefined) {
            localStorage.setItem('favoriteItems','[]');
            return (
                <div className="container">
                    <Header />
                    <Error />
                </div>
            );
        }
        return(
            <div className="container">
                <Header />
                <div className="main__block">
                    <SearchBlock>
                        <SearchField getWheather={this.currentFormSubmit} />
                        <FavoriteList favoriteCity={favoriteItems} onTodoClick={this.onDeleteTodo} onChangeCity={this.changeCity}/>
                    </SearchBlock>
                    <CurrentWheather {...weatherItems}/>
                </div>
                <div className="forecast__container">
                    {weatherItemsForecast.map(item => (<ForecastWheather key={item.date} {...item}/>))}
                </div>
                <Footer />
            </div>
        );
    }
}