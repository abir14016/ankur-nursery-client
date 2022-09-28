import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    }
    const menuItems = <>
        <li><Link to="/">হোম</Link></li>
        {/* <li><Link to="/order">অর্ডার করুন</Link></li> */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/flowers">ফুল</Link></li>
        <li><Link to="/floweringplants">ফুলগাছ</Link></li>
        <li><Link to="/fruitseedlings">ফলগাছ</Link></li>
        <li><Link to="/medicinalplants">ঔষধী গাছ</Link></li>
        {
            !user ? <li><Link className="btn btn-outline btn-primary" to="/login">লগইন করুন</Link></li> : <button
                onClick={handleLogOut}
                className="btn btn-outline btn-primary mr-2">
                লগআউট করুন
            </button>
        }

        {
            user && <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div class="avatar online placeholder">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                            <span class="text-xl">
                                {user?.displayName?.slice(0, 1)?.toUpperCase()}
                            </span>
                        </div>
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    {
                        user && <li><Link to='/dashboard'>Dashboard</Link></li>
                    }
                    <li>
                        <button onClick={handleLogOut}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        }

    </>
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">অংকুর নার্সারী</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className='navbar-end lg:hidden'>
                <label tabindex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;



