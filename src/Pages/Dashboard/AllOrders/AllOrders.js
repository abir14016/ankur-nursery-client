import React, { useEffect, useState } from 'react';
import AllOrder from '../AllOrder/AllOrder';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const url = 'http://localhost:5000/order';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);
    const a = allOrders.map(order => order.subTotal)
    let b = 0;
    for (let i = 0; i < a.length; i++) {
        b = b + a[i];
    }
    return (
        <div>
            <h2 className='mt-5 text-bold text-blue-600 font-bold'>All orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-primary'>Product</th>
                            <th className='text-primary'>Name</th>
                            <th className='text-primary'>Email</th>
                            <th className='text-primary'>Quantity</th>
                            <th className='text-primary'>SUb Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map(allOrder => <AllOrder
                                key={allOrder._id}
                                allOrder={allOrder}
                            ></AllOrder>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='divider'></div>
            <div className='mx-32'>
                <h2 className='text-purple-700 font-bold text-right'>Total sell: <span className='font-bold text-rose-600'>{b}</span></h2>
            </div>
        </div>
    );
};

export default AllOrders;