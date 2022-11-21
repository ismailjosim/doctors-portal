
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
export const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);






const PaymentCheckout = () => {
    const [cardError, setCardError] = useState('')



    const stripe = useStripe();
    const elements = useElements();


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



    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-primary w-full md:w-auto lg:w-auto mt-10 text-white' type="submit" disabled={!stripe}>
                proceed Payment
            </button>
        </form>
    );
};

export default PaymentCheckout;
