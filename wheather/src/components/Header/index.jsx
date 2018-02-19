import React from 'react';
import './style.css';

const Header = () => (
    <div className="header">
        <h1><a className="header__logo" href="">Home Cinema</a></h1>
        <ul className="navbar">
            <li className="navbar__list"><a href="">About</a></li>
            <li className="navbar__list"><a href="">Browse</a></li>
            <li className="navbar__list"><a href="">Login</a></li>
        </ul>
    </div>
);

export default Header;