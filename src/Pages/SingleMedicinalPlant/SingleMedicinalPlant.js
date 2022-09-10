import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleMedicinalPlant = () => {
    const { id } = useParams();
    const [medicinalPlant, setMedicinalPlant] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/medicinal/${id}`)
            .then(res => res.json())
            .then(data => setMedicinalPlant(data))
    }, [id]);

    return (
        <div>
            <p>single medicinal plant: {id}</p>
            <p>{medicinalPlant.name}</p>
        </div>
    );
};

export default SingleMedicinalPlant;