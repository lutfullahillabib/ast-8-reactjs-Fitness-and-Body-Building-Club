import React, { useEffect, useState } from 'react';
import profile from '../../profile.png'
import './Cart.css'

import Swal from 'sweetalert2';

import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Cart = ({ timer }) => {

    const [breaks, setBreaks] = useState('');

    const breaksTimeHandle = (breakTime) => {
        localStorage.setItem("break-time", breakTime);
        setBreaks(breakTime);
    };

    useEffect(() => {
        const getBreakFromLocalStorage = localStorage.getItem("break-time");
        setBreaks(getBreakFromLocalStorage);
    }, []);



    // console.log(timer)

    const toastsss = () => {

        if (timer > 0) {
            Swal.fire(
                'Congratulation..!!',
                `${timer} mins,
                Activity Completed.!!`,
                'success'
            )
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...!!!',
                text: `${timer} mins`,
                footer: 'Please, select & do your exercise..!!'
            })
        }

    }

    // const notify = (bTime) => { toast(`Break Time: ${bTime} secs`) };

    const notify = (bTime) => {
        toast.info(`Break Time: ${bTime} secs`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Zoom
        });
    }


    return (
        <div className='text-white bg-black cus-shadow p-3 rounded sticky-lg-top my-3 my-lg-0'>

            <div className='d-flex justify-content-between gap-3 align-items-center'>
                <div className='w-25'>
                    <img className='w-100 rounded-circle' src={profile} alt="" />
                </div>
                <div>
                    <h5>Md. Lutfllahil Labib</h5>
                    <span> <FontAwesomeIcon icon={faLocationDot} /> Dhaka, Bangladesh</span>
                </div>
            </div>


            <div className='d-flex justify-content-between bg-color p-2 pb-0 my-3 rounded align-items-center'>
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
                <h4 className='text-center mt-4'>
                    Add A Break
                </h4>
                <div className='pb-2 px-1 text-center'>
                    <button onClick={() => { breaksTimeHandle(10); notify(10) }} className='btn bg-color text-white rounded-5 m-1'>10 s</button>
                    <button onClick={() => { breaksTimeHandle(20); notify(20) }} className='btn  bg-color text-white rounded-5 m-1'>20 s</button>
                    <button onClick={() => { breaksTimeHandle(30); notify(30) }} className='btn  bg-color text-white rounded-5 m-1'>30 s</button>
                    <button onClick={() => { breaksTimeHandle(40); notify(40) }} className='btn  bg-color text-white rounded-5 m-1'>40 s</button>
                    <button onClick={() => { breaksTimeHandle(50); notify(50) }} className='btn  bg-color text-white rounded-5 m-1'>50 s</button>
                </div>
            </div>


            <div className='py-2'>
                <h4 className='text-center'>Exercise Details</h4>
                <div className='d-flex justify-content-between bg-color pb-1 p-2 my-2 rounded align-items-center'>
                    <h5>Exercise Time</h5>
                    <h5><span className='text-primary fw-bolder'>{timer}</span> mins</h5>
                </div>

                <div className='d-flex justify-content-between bg-color pb-1 p-2 my-2 rounded align-items-center'>
                    <h5>Break Time</h5>
                    <h5><span className='text-primary fw-bolder'>{breaks}</span> secs</h5>
                </div>

                <button onClick={toastsss} className='btn btn-light d-block mx-auto mt-4'>Activity Completed</button>
                {/* <ToastContainer /> */}
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

            </div>
        </div>
    );
};

export default Cart;
