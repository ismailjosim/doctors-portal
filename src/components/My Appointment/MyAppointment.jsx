import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);


    const url = `http://localhost:5000/bookings?email=${ user.email }`;

    const { data = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })



    // console.log(data.bookings);



    return (
        <div className='bg-slate-100 w-full h-full'>
            <div className='flex justify-between items-center mx-10 py-10'>
                <h3 className='text-2xl'>My Appointment {data?.bookings?.length}</h3>
                <p className='badge badge-outline rounded-md py-5'>Nov 18, 2022</p>
            </div>
            <div className="overflow-x-auto rounded-none pb-6">
                <table className="table w-full ">
                    <thead>

                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Treatment Name</th>
                            <th>Date</th>
                            <th>time</th>
                        </tr>

                    </thead>
                    <tbody>

                        {
                            data.bookings?.map((booking, idx) => {
                                return (
                                    <tr key={idx}>
                                        <th>{idx + 1}</th>
                                        <td>{booking.patientName}</td>
                                        <td>{booking.treatmentName}</td>
                                        <td>{booking.appointmentDate}</td>
                                        <td>{booking.slot}</td>
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


export default MyAppointment;
