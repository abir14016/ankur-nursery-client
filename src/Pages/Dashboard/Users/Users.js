import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);
    const url = 'http://localhost:5000/user';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2 className='mt-5 text-bold text-blue-600 font-bold'>Manage all users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-primary'>Image</th>
                            <th className='text-primary'>Name</th>
                            <th className='text-primary'>Email</th>
                            <th className='text-primary'>Role</th>
                            <th className='text-primary'>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <User
                                key={user._id}
                                user={user}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;