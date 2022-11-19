import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { UserRegister, updateUserInfo } = useContext(AuthContext);

    const [newUserEmail, setNewUserEmail] = useState('')
    const [token] = useToken(newUserEmail);
    const navigate = useNavigate()

    const handleAddDoctor = data => {

    }



    return (
        <div className='bg-slate-300 w-full h-full p-10'>
            <h3 className='text-3xl font-medium capitalize'>add a doctor</h3>
            <div className='w-1/2 rounded-lg bg-white mt-10'>
                <form onSubmit={handleSubmit(handleAddDoctor)} className="p-10">

                    {/* TODO: input Email */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name",
                            {
                                required: "Name is Required"
                            })}
                            className="input input-primary input-bordered w-full" />
                        {errors.name && <p className='text-error font-medium mt-1'>{errors.name?.message}</p>}

                    </div>

                    {/* TODO: input Email */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email",
                            {
                                required: "Email is Required"
                            })}
                            className="input input-primary input-bordered w-full" />
                        {errors.email && <p className='text-error font-medium mt-1'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select className="select select-accent w-full">
                            <option disabled selected>Select Specialty</option>
                            <option>Teeth Orthodontics</option>
                            <option>Cosmetic Dentistry</option>
                            <option>Teeth Cleaning</option>
                            <option>Cavity Protection</option>
                            <option>Pediatric Dental</option>
                            <option>Oral Surgery</option>
                        </select>
                    </div>


                    {/* TODO: submit button */}
                    <div className="form-control w-full mt-5">
                        <button type="submit" className="btn btn-secondary text-white w-full font-normal">Add A Doctor</button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default AddDoctor;
