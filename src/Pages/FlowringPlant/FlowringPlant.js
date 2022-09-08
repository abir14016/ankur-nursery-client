import React from 'react';

const FlowringPlant = ({ flowring }) => {
    const { name, picture, description, quantity, price } = flowring;
    return (
        <div class="card w-96 bg-base-100 shadow-xl border-2 mx-auto">
            <figure class="px-10 pt-10">
                <img style={{ width: 400, heigth: 225 }} src={picture} alt="Shoes" class="rounded-xl" />
            </figure>
            <hr />
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-2xl'>${price}</p>
                <p className='text-1xl'>Available: {quantity}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FlowringPlant;