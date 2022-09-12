import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/order/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email]);
    const a = orders.map(order => order.subTotal)
    let b = 0;
    for (let i = 0; i < a.length; i++) {
        b = b + a[i];
    }
    return (
        <div>
            <h2>Your orders here</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-primary'>Name</th>
                            <th className='text-primary'>Quantity</th>
                            <th className='text-primary'>Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <MyOrder
                                key={order._id}
                                order={order}
                            ></MyOrder>)
                        }
                    </tbody>
                </table>
            </div>
            <h2 className='text-purple-700 font-bold'>Total amount to pay: <span className='font-bold text-rose-600'>{b}</span></h2>
        </div>
    );
};

export default MyOrders;