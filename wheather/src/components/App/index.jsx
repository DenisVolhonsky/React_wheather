import React from 'react';
import './style.css'
import Header from 'components/Header';
import SearchForm from 'components/SearchForm';
import CurrentWheather from 'components/CurrentWheather';
import ForecastWheather from 'components/ForecastWheather';
import FavoriteList from 'components/FavoriteList';
import {fetchData, fetchDataForecast, fetchDataFavorite} from 'API'

export default class App extends React.Component {

    state = {
        weatherItems:[],
        weatherItemsForecast:[],
        favoriteItems:[]
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

    onDeleteTodo = id => {
        this.setState({
            favoriteItems: this.state.favoriteItems.filter(post => post.id !== id)
        });
        console.log(this.state.favoriteItems);
    }

    currentFormSubmit = city => {
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
        fetchDataFavorite(city).then(data => {
            this.setState({
                favoriteItems: [...this.state.favoriteItems, data]
            });
        });
    }

    componentWillMount = () => {
        fetchData('Kiev', 'weather').then(data => {
            this.setState({
                weatherItems: data
            });
        });
        fetchDataForecast('Kiev').then(data => {
            this.setState({
                weatherItemsForecast: data
            });
        });
    }

    render() {
        const {weatherItems, weatherItemsForecast, favoriteItems} = this.state;
        return(
            <div className="container">
                <Header />
                <SearchForm getWheather={this.currentFormSubmit} />
                <FavoriteList favoriteCity={favoriteItems} onTodoClick={this.onDeleteTodo} onChangeCity={this.changeCity}/>
                <CurrentWheather {...weatherItems}/>
                <div className="forecast__container">
                    {weatherItemsForecast.map(item => (<ForecastWheather key={item.date} {...item}/>))}
                </div>
            </div>
        );
    }
}