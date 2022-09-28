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

    const [items, setItem] = useState(0);

    const handleToCart = (todo) => {
        console.log(todo);
        setItem(items + todo)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-9'>
                    <Cards cards={cards} handleToCart={handleToCart}></Cards>
                </div>
                <div className='col-3 rounded'>
                    <Cart items={items}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;