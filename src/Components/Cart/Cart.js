import React from 'react';
import logo from '../../profile.png'
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Cart = () => {

    const notify = () => toast("Congratulation..!! Activity Completed.!!");

    return (
        <div className='text-white bg-black shadow-lg p-3 rounded'>


            <div className='d-flex justify-content-between gap-3'>
                <div className='w-25'>
                    <img className='w-100 rounded-circle' src={logo} alt="" />
                </div>
                <div>
                    <h5>Md. Lutfllahil Labib</h5>
                    <span> <FontAwesomeIcon icon={faLocationDot} /> Dhaka, Bangladesh</span>
                </div>
            </div>


            <div className='d-flex justify-content-between bg-color p-2 pb-0 my-2 rounded'>
                <div>
                    <h4>65kg</h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4>5.10</h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4>26yrs</h4>
                    <p>Age</p>
                </div>
            </div>


            <div>
                <h4 className='text-center'>
                    Add A Break
                </h4>
                <div className='py-2 px-1 text-center'>
                    <button className='btn btn-secondary rounded-5 m-1'>10s</button>
                    <button className='btn btn-secondary rounded-5 m-1'>20s</button>
                    <button className='btn btn-secondary rounded-5 m-1'>30s</button>
                    <button className='btn btn-secondary rounded-5 m-1'>40s</button>
                    <button className='btn btn-secondary rounded-5 m-1'>50s</button>
                </div>
            </div>


            <div className='py-2'>
                <h4 className='text-center'>Exercise Details</h4>
                <div className='d-flex justify-content-between bg-color pb-1 p-2 my-2 rounded'>
                    <h5>Exercise Time</h5>
                    <h5>200s</h5>
                </div>

                <div className='d-flex justify-content-between bg-color pb-1 p-2 my-2 rounded'>
                    <h5>Break Time</h5>
                    <h5>15s</h5>
                </div>

                <button onClick={notify} className='btn btn-light d-block mx-auto mt-4'>Activity Completed</button>
                <ToastContainer />

            </div>
        </div>
    );
};

export default Cart;
