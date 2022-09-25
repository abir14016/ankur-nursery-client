import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h4 className='text-primary font-bold'>{user.displayName},</h4>
                <h2 className='text-3xl font-bold text-purple-600'>Welcome to your dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link className='text-blue-700 font-semibold' to='/dashboard'>My Orders</Link></li>
                    <li><Link className='text-blue-700 font-semibold' to='/dashboard/myreview'>My Review</Link></li>

                    <li><Link className='text-blue-700 font-semibold' to='/dashboard/allusers'>Users</Link></li>
                    <li><Link className='text-blue-700 font-semibold' to='/dashboard/allorders'>Orders</Link></li>
                    {/* <li><Link className='text-blue-700 font-semibold' to='/dashboard/allproducts'>Products</Link></li> */}
                    <li>
                        <div className="dropdown dropdown-bottom">
                            <label tabIndex={0} className="text-blue-700 font-semibold">Manage Products</label>
                            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;