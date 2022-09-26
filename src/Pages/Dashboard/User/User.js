import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, refetch }) => {
    const { _id, image, name, email, role, users } = user;
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
                refetch();
                toast.success("successfully made an admin");

            });
    }

    const removeUser = (id) => {
        const proced = window.confirm("Are you sure?");
        if (proced) {
            const url = `http://localhost:5000/user/${id}`;

            // fetch(url, {
            //     method: "DELETE"
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         const remaining = users.filter(tool => tool._id !== id);
            //         setTools(remaining);
            //         if (data.deletedCount > 0) {
            //             toast.error("Deleted");
            //         }
            //     })
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount) {
                        toast.error("successfully deleted");
                        refetch();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
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
                <button onClick={() => removeUser(_id)} className="btn btn-error btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default User;