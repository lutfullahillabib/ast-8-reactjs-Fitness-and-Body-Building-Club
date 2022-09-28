import React from 'react';
import logo from './logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='d-flex container justify-content-start p-3'>
            <img className='img' src={logo} alt="logo" />
            <h1 className='text-white'>Fitness & Body-Building Club</h1>
        </div>
    );
};

export default Header;