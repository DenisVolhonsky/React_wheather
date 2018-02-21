import v4 from 'uuid/v4';

const key1 = 'ee60a56d516461352f04a28877459c45';
// const key2 = '5429d5cbe53b45e3e46e75a267463eb4';
// const key3 = '59707d5d75b7df6a99fa050f93b97357';
// const key4 = 'ae0e49faca41d19122d478f130845486';


export function fetchData (city, period) {  // возвращаем результат работы fetch
  return fetch(`https://api.openweathermap.org/data/2.5/${period}?q=${city}&APPID=${key1}`)
        .then(response=>{
            if(response.ok) return response.json();
            throw new Error('Fetching error'+ response.statusText);
        })
        .then(data => {
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

            return itemData;
        })
        .catch(err => console.log(err));
}

export function fetchDataForecast (city) {  // возвращаем результат работы fetch
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${key1}`)
        .then(response=>{
            if(response.ok) return response.json();
            throw new Error('Fetching error'+ response.statusText);
        })
        .then(data => {
            let forecast=[];
            let dayWeather;
            for(let i=0; i<40; i+=8) {
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

export function fetchDataFavorite (city) {  // возвращаем результат работы fetch
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


