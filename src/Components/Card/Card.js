import React from 'react';

const Card = (props) => {

    const { id, name, age, time, details, img } = props;

    return (
        <div>

            <div class="col">
                <div class="card h-100">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <h5 class="card-title">Age: {age}</h5>
                        <h5 class="card-title">Time: {time}</h5>
                        <p class="card-text">{details.slice(0, 50)}</p>

                        <button className='btn btn-primary d-block w-100'>Add to list</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;

