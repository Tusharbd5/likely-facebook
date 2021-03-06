import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header">
                    <img src={logo} alt=""/>
                <nav>
                <a href="/home">Home</a>
                <a href="/viewPerson">View Person</a>
                <a href="/manage">Manage Inventory</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;