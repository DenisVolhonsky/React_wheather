import React from 'react';
import './style.css'

const ForecastWheather = ({date, name, temp, humidity, pressure, wind, clouds, icon}) => {
    return(
        <div className="ForecastWheather">
            <p className="ForecastWheather__data">{date}</p>
            <p className="ForecastWheather__field">Температура: <b>{temp}&deg;С</b></p>
            <p className="ForecastWheather__field">Влажность: <b>{humidity}%</b></p>
            <p className="ForecastWheather__field">Давление: <b>{pressure} кПа</b></p>
            <p className="ForecastWheather__field">Скорость ветра: <b>{wind} м/с</b></p>
            <p className="ForecastWheather__field">Облачность: <b>{clouds}</b></p>
            <p className="ForecastWheather__field"><img className="WheatherPic" src={icon} alt="wheather_icon" /></p>
        </div>
    );
}

export default ForecastWheather;