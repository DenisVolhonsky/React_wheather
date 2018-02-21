import React from 'react';
import './style.css';

const CurrentWheather = ({name, temp, humidity, pressure, visibility, wind, clouds, icon}) => {
    return(
        <div className="CurrentWheather">
                <p><b>Погода на данный момент</b></p>
                <p>Название города: <b>{name}</b></p>
                <p>Температура: <b>{temp}&deg;С</b></p>
                <p>Влажность: <b>{humidity}%</b></p>
                <p>Давление: <b>{pressure} кПа</b></p>
                <p>Видимость: <b>{visibility}км</b></p>
                <p>Скорость ветра: <b>{wind} м/с</b></p>
                <p>Облачность: <b>{clouds}</b></p>
                <p><img className="WheatherPic" src={icon} alt="wheather_icon" /></p>
        </div>
    );
}

export default CurrentWheather;