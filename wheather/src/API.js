export function fetchData (city) {  // возвращаем результат работы fetch
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ee60a56d516461352f04a28877459c45`)
        .then(response=>{
            if(response.ok) return response.json();
            throw new Error('Fetching error'+ response.statusText);
        })
        .then(data => {
            // this.setState({
            //     name: data.name,
            //     temp: Math.round(data.main.temp-273),
            //     humidity: data.main.humidity,
            //     pressure: Math.round(data.main.pressure*0.75),
            //     visibility: data.visibility/1000,
            //     wind: data.wind.speed,
            //     clouds: data.weather[0].description,
            //     icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
            // });

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


