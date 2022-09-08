import React from 'react';
import { useState } from 'react';
import FlowringPlant from '../FlowringPlant/FlowringPlant';

const FloweringPlants = () => {
    const [flowrings, setFlowrings] = useState([]);
    fetch('flowring.json')
        .then(res => res.json())
        .then(data => setFlowrings(data));
    return (
        <div>
            <h2 className='text-5xl text-center text-yellow-300'>All Flower Plant Collection: {flowrings.length}</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    flowrings.map(flowring => <FlowringPlant
                        key={flowring._id}
                        flowring={flowring}
                    ></FlowringPlant>)
                }
            </div>
        </div>
    );
};

export default FloweringPlants;