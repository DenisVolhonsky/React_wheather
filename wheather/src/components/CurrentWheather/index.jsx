import React from 'react';
import './style.css'

export default class CurrentWheather extends React.Component {

    render() {
        const {name, temp, humidity, pressure, visibility, wind, clouds, icon} = this.props;
        return(
            <div className="CurrentWheather">
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
}