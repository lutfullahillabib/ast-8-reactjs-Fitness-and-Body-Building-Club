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

    const [item, setItem] = useState([]);

    const handleToCart = (todo) => {
        console.log(todo);
        const newItem = [...item, todo];
        setItem(newItem);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-9'>
                    <Cards cards={cards} handleToCart={handleToCart}></Cards>
                </div>
                <div className='col-3 rounded'>
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;