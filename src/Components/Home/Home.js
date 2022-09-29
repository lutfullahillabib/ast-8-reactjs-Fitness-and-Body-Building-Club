import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';

const Home = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);


    const [timer, setTimer] = useState(0);

    const handleToCart = (todoTime) => {
        console.log(todoTime);
        const totalTime = timer + todoTime;
        setTimer(totalTime);
    }

    return (
        <div>

            <div className='row mt-2 m-5'>
                <h2 className='text-white my-3 col-lg-9 col-12'>
                    Select Your Exercise
                </h2>
                <div className='col-lg-9 col-12'>
                    <Cards cards={cards} handleToCart={handleToCart}></Cards>
                </div>
                <div className='col-lg-3 col-12 rounded'>
                    <Cart timer={timer}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;