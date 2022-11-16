import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='max-w-sm mx-auto my-28  p-5 rounded-lg shadow-md border border-primary'>
            <h3 className='text-center font-bold text-3xl uppercase mb-8'>Log In</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email")} type="email" className="input input-primary input-bordered w-full" />
                </div>
                <div className="form-control w-full my-5">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password")} type="password" className="input input-bordered w-full input-primary" />
                </div>
                <div className="form-control w-full mt-5">
                    <button type="submit" class="btn btn-secondary text-white w-full font-normal">log in</button>
                </div>
                <div className='mt-3 mb-5 text-center text-sm'>
                    <span>New to Doctors Portal?</span> <Link className='text-accent hover:text-primary' to='/register'>Create new account</Link>
                </div>
                <div className="divider">OR</div>
                <div className="form-control w-full my-5">
                    <button className="btn btn-outline hover:text-white">CONTINUE WITH GOOGLE</button>
                </div>
            </form>
        </div>
    );
};

export default UserLogin;
