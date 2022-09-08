import React from 'react';
import medicinalImage from '../../../images/group/medicinal.jpg'
import fruitseedlings from '../../../images/group/fruitseedlings.jpg';
import flowring from '../../../images/group/flowring.jpg';
import flower from '../../../images/group/flower.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CardGroup = () => {
    const [medicinals, setMedicinals] = useState([]);
    useEffect(() => {
        fetch('medicinal.json')
            .then(res => res.json())
            .then(data => setMedicinals(data))
    }, [])
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div class="card card-side bg-base-100 shadow-xl border-2">
                <figure><img style={{ width: 200, height: 280 }} src={flower} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">ফুল</h2>
                    <p className='text-red-500 font-bold'>Our flower collection</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">দেখুন</button>
                    </div>
                </div>
            </div>
            <div class="card card-side bg-base-100 shadow-xl border-2">
                <figure><img style={{ width: 200, height: 280 }} src={flowring} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">ফুলগাছ</h2>
                    <p className='text-indigo-500 font-bold'>Our flower plants collection</p>
                    <div class="card-actions justify-end">
                        <Link to="/floweringplants" class="btn btn-primary">দেখুন</Link>
                    </div>
                </div>
            </div>
            <div class="card card-side bg-base-100 shadow-xl border-2">
                <figure><img style={{ width: 200, height: 280 }} src={fruitseedlings} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">ফলের গাছ</h2>
                    <p className='text-orange-900 font-bold'>Our Fruit plant collection</p>
                    <div class="card-actions justify-end">
                        <Link to="/fruitseedlings" class="btn btn-primary">দেখুন</Link>
                    </div>
                </div>
            </div>
            <div class="card card-side bg-base-100 shadow-xl border-2">
                <figure><img style={{ width: 200, height: 280 }} src={medicinalImage} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">ঔষধী গাছ</h2>
                    <p className='text-blue-900 font-bold'>Our medicial plant collection :{medicinals.length}</p>
                    <div class="card-actions justify-end">
                        <Link to="/medicinalplants" class="btn btn-primary">দেখুন</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardGroup;