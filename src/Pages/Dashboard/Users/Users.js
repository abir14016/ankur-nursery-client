import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import User from '../User/User';

const Users = () => {
    const url = 'http://localhost:5000/user';
    const { isLoading, refetch, data: users } = useQuery('repoData', () =>
        fetch(url).then(res =>
            res.json()
        )
    );
    if (isLoading) {
        return <Loading></Loading>
    }
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
                            users?.map(user => <User
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;