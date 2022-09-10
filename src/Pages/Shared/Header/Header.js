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
        <li><Link to="/order">অর্ডার করুন</Link></li>
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
                            <span class="text-xl">JO</span>
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
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
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
                        {/* <li tabindex="0">
                            <Link to="allproducts" className="justify-between">
                                Products
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link to="/floweringplants">Flowrings</Link></li>
                                <li><Link to="/fruitseedlings">Fruitseedlings</Link></li>
                                <li><Link to="/flowers">Flowers</Link></li>
                            </ul>
                        </li> */}
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">অংকুর নার্সারী</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {/* <li tabindex="0">
                        <Link to="allproducts" className="justify-between">
                            Products
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2">
                            <li><Link to="/floweringplants">Flowrings</Link></li>
                            <li><Link to="/fruitseedlings">Fruitseedlings</Link></li>
                            <li><Link to="/flowers">Flowers</Link></li>
                        </ul>
                    </li> */}
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;



