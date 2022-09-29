import React from 'react';
import logo from './logo.png';
import './Header.css'

const Header = () => {
    return (

        <div>

            <nav className="navbar navbar-dark bg-dark rounded">
                <div className="container d-flex justify-content-center justify-content-lg-between align-items-center">

                    <a className="navbar-brand" href='index.html'>

                        <div className='d-flex container justify-content-center justify-content-lg-start text-center mx-auto gap-2'>
                            <img className='img' src={logo} alt="logo" />
                            <h2 className='text-white text-wrap a'>Fitness & Body-Building Club</h2>
                        </div>

                    </a>


                    <a className="btn btn-outline-light " href='#blog' >Blog</a>


                </div>
            </nav>



        </div>
    );
};

export default Header;