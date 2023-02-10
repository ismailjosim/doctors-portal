import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { RxCross2 } from 'react-icons/rx'
import { toast } from 'react-toastify';
import Loading from './../Shared/Loading';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);


    const url = `https://doctor-portal-server-tawny.vercel.app/bookings?email=${ user.email }`; // error: need to add ? here

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers:
                {
                    authorization: `bearer ${ localStorage.getItem('userAccessToken') }`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    // console.log(data.bookings);
    const handleRemoveAppointment = booking => {
        console.log(booking);

        fetch(`https://doctor-portal-server-tawny.vercel.app/bookings/${ booking._id }`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${ localStorage.getItem('userAccessToken') }`
            }
        })
            .then(res => res.json())
            .then(data => {
                const booking = data.booking;
                console.log(booking);
                if (booking.deletedCount > 0) {
                    toast.success("booking Removed!", { autoClose: 1000 })
                    refetch();
                }
            })

    }



    return (
        <div className='bg-slate-100 w-full h-full'>
            <div className='flex justify-between items-center mx-10 py-10'>
                <h3 className='text-2xl'>My Appointment { data?.bookings?.length }</h3>
                <p className='badge badge-outline rounded-md py-5'>Nov 18, 2022</p>
            </div>
            <div className="overflow-x-auto rounded-none pb-6">
                <table className="table w-full ">
                    <thead>

                        <tr>
                            <th>Serial</th>
                            <th>Treatment Name</th>
                            <th>Date</th>
                            <th>time</th>
                            <th>Price</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>

                        {
                            data.bookings?.map((booking, idx) => {
                                return (
                                    <tr key={ idx }>
                                        <th>{ idx + 1 }</th>
                                        <td>{ booking.treatmentName }</td>
                                        <td>{ booking.appointmentDate }</td>
                                        <td>{ booking.slot }</td>
                                        <td>
                                            {
                                                booking.price && !booking.paid && <Link to={ `/dashboard/payment/${ booking._id }` }>
                                                    <button className='btn btn-error btn-sm text-white'>Pay</button>
                                                </Link>
                                            }
                                            {
                                                booking.price && booking.paid && <button className='btn btn-accent text-white btn-sm'>Paid</button>
                                            }

                                        </td>
                                        <td>
                                            <button onClick={ () => handleRemoveAppointment(booking) } className='bg-error p-1 text-white rounded-full'>
                                                <RxCross2 />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            {

            }
        </div>
    );
};


export default MyAppointment;
