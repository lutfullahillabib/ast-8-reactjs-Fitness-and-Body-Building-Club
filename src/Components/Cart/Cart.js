import React from 'react';
import logo from '../../profile.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Cart = () => {
    return (
        <div className='text-white bg-secondary shadow-lg py-5'>
            <div className='row'>
                <div className='col-3'>
                    <img className='w-100 rounded-5' src={logo} alt="" />
                </div>
                <div>
                    <h2>Md. Lutfllahil Labib</h2>
                    <span> <FontAwesomeIcon icon={faLocationDot} /> Dhaka, Bangladesh</span>
                </div>
            </div>
        </div>
    );
};

export default Cart;