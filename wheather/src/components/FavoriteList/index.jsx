import React from 'react';
import './style.css';

const FavoriteList = ({favoriteCity, onTodoClick, onChangeCity}) => {
    return(
        <div className="favorite">
            <p className="favorite__title">FavoriteList</p>
            <ul>
                {favoriteCity.map(item =>
                    <li className='favorite__item' key={item.id} onClick={() => onChangeCity(item.name)}>
                        {item.name}
                        <span className="delete-btn" onClick={() => onTodoClick(item.id)}></span>
                    </li>)}
            </ul>
        </div>
    );
}

export default FavoriteList;
