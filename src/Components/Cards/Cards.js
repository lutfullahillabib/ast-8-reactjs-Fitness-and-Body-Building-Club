import React from 'react';
import Card from '../Card/Card';

const Cards = (props) => {
    const { cards, handleToCart } = props;

    return (
        <div className='container'>
            <h2 className='text-white'>
                Select Your Exercise
            </h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 '>
                {
                    cards.map(card => <Card

                        card={card}

                        key={card.id}

                        handleToCart={handleToCart}

                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;

