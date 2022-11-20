import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import ConfirmationModal from '../Shared/ConfirmationModal';


const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)



    const closeModal = () => {
        setDeletingDoctor(null)
    }



    const { data: doctors = [], isLoading, refetch } = useQuery({
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


    const handleDeleteDoctor = doctor => {
        // console.log('inside manage doctor', doctor);

        fetch(`http://localhost:5000/doctors/${ doctor._id }`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${ localStorage.getItem('userAccessToken') }`
            }
        })
            .then(res => res.json())

            .then(data => {

                const doctor = data.doctor;
                if (doctor.deletedCount > 0) {
                    toast.success("Doctor Removed!", { autoClose: 1000 })
                    refetch()
                }
            })


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
                                                <div className="w-14 mask rounded-lg ring ring-primary ring-offset-base-100 ring-offset-2">
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
                                            <label htmlFor="confirmation-modal" onClick={() => setDeletingDoctor(doctor)} className="btn btn-error btn-xs text-white rounded-md">Delete</label>
                                        </td>

                                    </tr>
                                )
                            })
                        }



                    </tbody>


                </table>
            </div>
            {
                deletingDoctor &&
                <ConfirmationModal
                    title={`Are You Sure!`}
                    message={`Please Check Before Confirmation`}
                    successAction={handleDeleteDoctor}
                    deletingDoctor={deletingDoctor}
                    closeModal={closeModal}
                >


                </ConfirmationModal>
            }

        </div >
    );
};

export default ManageDoctors;
