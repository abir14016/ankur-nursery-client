import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

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
            <h2>All users here: {users.length}</h2>
        </div>
    );
};

export default Users;