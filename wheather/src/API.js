import v4 from 'uuid/v4';  // connect generator id

const key1 = 'ee60a56d516461352f04a28877459c45'; // API ID
// const key2 = '5429d5cbe53b45e3e46e75a267463eb4';
// const key3 = '59707d5d75b7df6a99fa050f93b97357';
// const key4 = 'ae0e49faca41d19122d478f130845486';

export function coords() {   // getting current position
    return new Promise(function (resolve, reject) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve([position.coords.latitude, position.coords.longitude]);
            });
        } else {
            reject("Сорян, чо-то не работает!");
        }
    })
}

export function fetchDataGeo (lat, lon) {  // fetching data from current position for current weather
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${key1}`)
        .then(response=>{
            if(response.ok) return response.json();
            throw new Error('Fetching error'+ response.statusText);
        })
        .then(data => {  // select fields in new obj
            const itemData = {
                name: data.name,
                temp: Math.round(data.main.temp-273),
                humidity: data.main.humidity,
                pressure: Math.round(data.main.pressure*0.75),
                visibility: data.visibility/1000,
                wind: data.wind.speed,
                clouds: data.weather[0].description,
                icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
            }
            return itemData;                    // object weather
        })
        .catch(err => console.log(err));
}

export function fetchDataForecastGeo (lat, lon) {  // fetching data from current position for forecast wheather
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${key1}`)
        .then(response=>{
            if(response.ok) return response.json();
            throw new Error('Fetching error'+ response.statusText);
        })
        .then(data => {
            let forecast=[];
            let dayWeather;
            for(let i=0; i<40; i+=8) {                              // select 5 days forecast from data
                dayWeather = {                                      // select fields in new obj
                    date: data.list[i].dt_txt.slice(0,10),
                    name: data.city.name,
                    temp: Math.round(data.list[i].main.temp-273),
                    humidity: data.list[i].main.humidity,
                    pressure: Math.round(data.list[i].main.pressure*0.75),
                    wind: data.list[i].wind.speed,
                    clouds: data.list[i].weather[0].description,
                    icon: `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`
                }
                forecast.push(dayWeather); // filling array for 5 days
            }
            return forecast;
        })
        .catch(err => console.log(err));
}

export function fetchData (city, period) {  // fetching data from selected city position for current wheather
    return fetch(`https://api.openweathermap.org/data/2.5/${period}?q=${city}&APPID=${key1}`)
        .then(response=>{
            if(response.ok) return response.json();
            throw new Error('Fetching error'+ response.statusText);
        })
        .then(data => {
            let itemData = {  // data obj
                name: data.name,
                temp: Math.round(data.main.temp-273),
                humidity: data.main.humidity,
                pressure: Math.round(data.main.pressure*0.75),
                visibility: data.visibility/1000,
                wind: data.wind.speed,
                clouds: data.weather[0].description,
                icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
            }
            return itemData;
        })
        .catch(err => console.log(err));
}

export function fetchDataForecast (city) {  // fetching data from selected city position for 5 day forecast wheather
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${key1}`)
        .then(response=>{
            if(response.ok) return response.json();
            throw new Error('Fetching error'+ response.statusText); //
        })
        .then(data => {
            let forecast=[];
            let dayWeather;
            for(let i=0; i<40; i+=8) {   // select 5 days forecast from data
                dayWeather = {
                    date: data.list[i].dt_txt.slice(0,10),
                    name: data.city.name,
                    temp: Math.round(data.list[i].main.temp-273),
                    humidity: data.list[i].main.humidity,
                    pressure: Math.round(data.list[i].main.pressure*0.75),
                    wind: data.list[i].wind.speed,
                    clouds: data.list[i].weather[0].description,
                    icon: `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`
                }
                forecast.push(dayWeather);
            }
            return forecast;
        })
        .catch(err => console.log(err));
}

export function fetchDataFavorite (city) {   // fetching data for favorit cities
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key1}`)
        .then(response=>{
            if(response.ok) return response.json();
            throw new Error('Fetching error'+ response.statusText);
        })
        .then(data => {
            let favoriteItem = {
                id: v4(),
                name: data.name
            }
            return favoriteItem;
        })
        .catch(err => console.log(err));
}

export function fetchDataFavoriteGeo (lat, lon) {   // fetching data for favorite cities from GEO
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${key1}`)
        .then(response=>{
            if(response.ok) return response.json();
            throw new Error('Fetching error'+ response.statusText);
        })
        .then(data => {
            let favoriteItemGeo = {
                id: v4(),
                name: data.name
            }
            return favoriteItemGeo;
        })
        .catch(err => console.log(err));
}
