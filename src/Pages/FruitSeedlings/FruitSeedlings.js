import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FruitSeedLing from '../FruitSeedLing/FruitSeedLing';

const FruitSeedlings = () => {
    const [fruitSeedLings, setFruitSeedLings] = useState([]);
    useEffect(() => {
        fetch("fruitSeedLings.json")
            .then(res => res.json())
            .then(data => setFruitSeedLings(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl text-center text-orange-500'>Fruit Plants Collection: {fruitSeedLings.length}</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    fruitSeedLings.map(fruitSeedLing => <FruitSeedLing
                        key={fruitSeedLing._id}
                        fruitSeedLing={fruitSeedLing}
                    ></FruitSeedLing>)
                }
            </div>
        </div>
    );
};

export default FruitSeedlings;