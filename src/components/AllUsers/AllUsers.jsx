import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {


    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data.users;
        }
    })



    // const { data: appOptions = [], refetch, isLoading } = useQuery({
    //     queryKey: ['appOptions', date],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/appOptions?date=${ date }`);
    //         const data = await res.json();
    //         return data.options;
    //     }
    // })








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
                                        <td>Blue</td>
                                        <td>Blue</td>
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
