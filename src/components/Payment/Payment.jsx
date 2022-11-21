import React from 'react';
import { useLoaderData } from 'react-router-dom';
import payment from '../../assets/icons/payment.gif';
import { Elements } from '@stripe/react-stripe-js';
import PaymentCheckout, { stripePromise } from '../PaymentCheckout/PaymentCheckout';


const Payment = () => {
    const data = useLoaderData();
    const { _id, appointmentDate, treatmentName, patientName, phone, slot, email, price } = data.booking
    // console.log(_id, appointmentDate, treatmentName, patientName, phone, slot, email, price);

    return (
        <div>
            <h3 className='font-bold capitalize text-2xl text-center mt-10'>service Summary</h3>
            <div className='p-8 w-9/12 mx-auto border-2 border-primary my-5 rounded-md shadow-lg'>
                <div className="sm:flex justify-between gap-5">

                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0 ring ring-accent ring-offset-base-100 ring-offset-2 rounded-md">
                        <img alt="" src={payment} className="object-cover object-center w-full h-full rounded" />
                    </div>

                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">{treatmentName}</h2>
                            <span className="text-sm dark:text-gray-400">Order ID: {_id}</span>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="dark:text-gray-400">{email}</span>
                            </span>
                            <span className="flex items-center space-x-2 text-2xl text-error font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <h3>{price}</h3>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mt-10 border-2 p-3 rounded-md'>
                    <Elements stripe={stripePromise}>
                        <PaymentCheckout />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;
