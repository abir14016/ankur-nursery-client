import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MedicinalPlant from '../MedicinalPlant/MedicinalPlant';

const MedicinalPlants = () => {
    const [medicinalPlants, setMecinalPlants] = useState([]);
    useEffect(() => {
        fetch('medicinal.json')
            .then(res => res.json())
            .then(data => setMecinalPlants(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl text-indigo-900 text-center'>All Collection of our medicinal plants: </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    medicinalPlants.map(medicinalPlant => <MedicinalPlant
                        key={medicinalPlant._id}
                        medicinalPlant={medicinalPlant}
                    ></MedicinalPlant>)
                }
            </div>
        </div>
    );
};

export default MedicinalPlants;