import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const AllUsers = () => {


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data.users;
        }
    })


    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${ id }`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${ localStorage.getItem('userAccessToken') }`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.admin.modifiedCount > 0) {
                    toast.success('Admin Make Successfully', { autoClose: 1000 })
                    refetch()
                }
            })
    }





    return (
        <div>
            <h3>All Users </h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, idx) => {
                                return (
                                    <tr key={user._id}>
                                        <th>{idx + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary text-white'>Make Admin</button>}</td>
                                        <td><button className='btn btn-xs btn-error'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
