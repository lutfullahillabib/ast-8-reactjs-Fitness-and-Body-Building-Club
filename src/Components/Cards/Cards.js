import React from 'react';
import Card from '../Card/Card';

const Cards = (props) => {
    const { cards } = props;

    return (
        <div className='container'>
            <h2 className='text-white'>
                Select Your Exercise
            </h2>
            <div className='row row-cols-1 row-cols-md-3 g-4 text-white '>
                {
                    cards.map(card => <Card
                        card={card}
                        key={card.id}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;