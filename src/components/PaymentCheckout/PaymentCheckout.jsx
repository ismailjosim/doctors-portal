
import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Swal from 'sweetalert2'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
export const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);


const PaymentCheckout = ({ booking }) => {

    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { _id, price, patientName, email } = booking;




    // Header :  Create PaymentIntent as soon as the page loads
    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${ localStorage.getItem('userAccessToken') }`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);



    const handleSubmit = async (event) => {
        event.preventDefault()

        // TODO: if not stripe or not element then it will return it and stop process
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setCardError(error.message);
        } else {
            setCardError('');
        }

        setProcessing(true)
        const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: email
                    },
                },
            },
        );


        if (confirmationError) {
            setCardError(confirmationError.message);
            return
        }

        if (paymentIntent.status === 'succeeded') {
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }

            // LINK: Store Payment Info to database
            fetch("http://localhost:5000/payments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${ localStorage.getItem('userAccessToken') }`
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    const payment = data.payment
                    if (payment.insertedId) {
                        Swal.fire(
                            'Congratulations!',
                            'Your Payment Is Completed!',
                            'success'
                        )
                        setTransactionId(paymentIntent.id)
                    }
                })
        }
    }





    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement className='m-5 border-2 border-accent p-3 rounded-full'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                fontWeight: "bold",
                                color: '#19D3AE',
                                '::placeholder': {
                                    color: '#3A4256',
                                    fontWeight: "bold",
                                },
                            },
                            invalid: {
                                color: '#F32B42',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary w-full md:w-auto lg:w-auto mt-10 text-white' type="submit" disabled={!stripe || !clientSecret || processing}>
                    proceed Payment
                </button>
            </form>



            {
                cardError &&
                <div className='text-error text-sm font-medium text-center py-4 flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-error">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <span>{`${ cardError } Please Try Again!`}</span>

                </div>
            }
        </>

    );
};

export default PaymentCheckout;
