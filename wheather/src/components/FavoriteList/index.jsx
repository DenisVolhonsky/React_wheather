import React from 'react';
// import PropTypes from 'prop-types';
import './style.css';

const FavoriteList = ({favoriteCity, onTodoClick, onChangeCity}) => {
    console.log(favoriteCity);
    return(
        <div className="favorite">
            <p className="favorite__title">Favorite list</p>
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

// FavoriteList.propTypes = {
//     onTodoClick: PropTypes.func.isRequired,
//     onChangeCity: PropTypes.func.isRequired,
// }

export default FavoriteList;
