import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, refetch }) => {
    const { image, name, email, role } = user;
    const url = `http://localhost:5000/user/admin/${email}`
    const makeAdmin = () => {
        fetch(url, {
            method: "PUT",
            headers: {
                // 'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success("successfully made an admin");

            });
    }
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt='user' />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            {
                !role ? <td><button onClick={makeAdmin} className="btn btn-xs">Make Admin</button></td> : <td><button className="btn btn-success btn-xs">{role}</button></td>
            }
            <td>
                <button className="btn btn-error btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default User;