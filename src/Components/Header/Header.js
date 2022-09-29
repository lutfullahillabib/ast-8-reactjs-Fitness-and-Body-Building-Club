import React from 'react';
import logo from './logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='d-flex container justify-content-center p-3 text-center mx-auto gap-2'>
            <img className='img' src={logo} alt="logo" />
            <h1 className='text-white'>Fitness & Body-Building Club</h1>
        </div>
    );
};

export default Header;