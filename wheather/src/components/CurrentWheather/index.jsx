import React from 'react';
import './style.css';

const CurrentWheather = ({name, temp, humidity, pressure, visibility, wind, clouds, icon}) => {
    return(
        <div className="current__weather">
                <p className="current__weather-name">Current weather</p>
                <p className="current__weather-field">Название города: <b>{name}</b></p>
                <p className="current__weather-field">Температура: <b>{temp}&deg;С</b></p>
                <p className="current__weather-field">Влажность: <b>{humidity}%</b></p>
                <p className="current__weather-field">Давление: <b>{pressure} кПа</b></p>
                <p className="current__weather-field">Видимость: <b>{visibility}км</b></p>
                <p className="current__weather-field">Скорость ветра: <b>{wind} м/с</b></p>
                <p className="current__weather-field">Облачность: <b>{clouds}</b></p>
                <p className="current__weather-field"><img className="WheatherPic" src={icon} alt="wheather_icon" /></p>
        </div>
    );
}

export default CurrentWheather;