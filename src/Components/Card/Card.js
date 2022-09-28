import React from 'react';
import './Card.css'

const Card = (props) => {
    // console.log(props)

    const { handleToCart } = props;
    const { name, age, time, details, img } = props.card;

    return (
        <div>

            <div className="col">
                <div className="card image">
                    <img className='' src={img} alt="..." />
                    <div className="card-body bg-black text-white">
                        <h5 className="card-title">{name}</h5>
                        <h5 className="card-title">Age: {age}</h5>
                        <h5 className="card-title">Time: {time}</h5>
                        <p className="card-text">{details}</p>

                        <button onClick={() => handleToCart(time)} className='btn btn-light d-block w-100'>Add to list</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;

