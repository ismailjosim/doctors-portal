import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';

const ManageDoctors = () => {
    const { data: doctors = [], isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${ localStorage.getItem('userAccessToken') }`
                    }
                })
                const data = await res.json();
                return data?.doctors;

            } catch (error) {
                console.log(error);
            }
        }
    })



    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3>All doctors {doctors?.length}</h3>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>specialties</th>
                            <th>status</th>
                            <th>option</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors?.map((doctor, idx) => {
                                return (
                                    <tr key={doctor._id}>
                                        <th>{idx + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={doctor?.image} alt={doctor.name} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='font-semibold'>{doctor.name}</td>
                                        <td>{doctor.specialty}</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs text-green-600">active</button>
                                        </th>
                                        <td>
                                            <button className="btn btn-error btn-xs text-white rounded-md">Delete</button>
                                        </td>

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

export default ManageDoctors;
