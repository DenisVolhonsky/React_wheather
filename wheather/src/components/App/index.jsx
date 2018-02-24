import React from 'react';
import './style.css'
import Header from 'components/Header';
import SearchBlock from 'components/SearchBlock';
import SearchField from 'components/SearchField';
import CurrentWheather from 'components/CurrentWheather';
import ForecastWheather from 'components/ForecastWheather';
import FavoriteList from 'components/FavoriteList';
import Error from 'components/Error';  // display error component
import Footer from 'components/Footer';

////////getting data from API////
import {fetchData, fetchDataForecast, fetchDataFavorite, fetchDataGeo, fetchDataForecastGeo, fetchDataFavoriteGeo, coords} from 'API';
/////////////////////////////////

export default class App extends React.Component {

    state = {
        weatherItems:[],
        weatherItemsForecast:[],
        favoriteItems:[]
    };
/////////////////////////handle fav list///////////////////////////////////////////////
    changeCity = city => {  // change city from favorite fist
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
//////////////////////////////handle change///////////////////////////////////////////
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
            //     favoriteItems: [...this.state.favoriteItems, data] //filling array of objects
            let arr =[...this.state.favoriteItems, data];
            let uniqe=arr.filter((item, index, self) =>
                index === self.findIndex(t =>  t.name === item.name)
            );
            this.setState({favoriteItems: uniqe});  //data is object
        });
    }
////////////////////////////////////////with loading////////////////////////////////////////////////////
    componentWillMount = () => {

        let favorite = localStorage.getItem('favoriteItems'); // getting favorite city obj from LocalStorage

        coords()              // defolt weather from geolocation
            .then(response => {
                fetchDataGeo(...response).then(data => {  // defolt current weather
                    this.setState({weatherItems: data});
                });
                fetchDataForecastGeo(...response).then(data => {  // defolt forecast weather
                    this.setState({weatherItemsForecast: data});
                });
                fetchDataFavoriteGeo(...response).then(data => {  // defolt favorite weather

                  let arr =[...JSON.parse(favorite),data];
                  let uniqe=arr.filter((item, index, self) =>
                      index === self.findIndex(t =>  t.name === item.name)
                  );
                    this.setState({favoriteItems: uniqe});  //data is object
                     //this.setState({favoriteItems: [...JSON.parse(favorite),data]});  //data is object
                });
            })
            .catch(response => console.error(response));
    }

//////////////////////////////////////////////////////////////////////////////////////////////////
    render() {
        const {weatherItems, weatherItemsForecast, favoriteItems} = this.state; // destructuring this.state

        localStorage.setItem('favoriteItems',JSON.stringify(favoriteItems));  // set data from Local Storage

        ///////////////error processing and displaying message///////////////
        if(weatherItems === undefined || weatherItemsForecast === undefined) {
           //localStorage.setItem('favoriteItems','[]');
            return (
                <div className="container">
                    <Header />
                    <Error />
                    <Footer />
                </div>
            );
        }
        ////////////////////////////building page//////////////////////////////
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

