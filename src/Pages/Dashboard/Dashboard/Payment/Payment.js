import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const bookings  = useLoaderData();
   const {treatment, price, appointmentDate, slot } = bookings;

  
    return (
        <div>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
            <Elements stripe={stripePromise}>
      <CheckoutForm 
      bookings= {bookings}
      />
    </Elements>
            </div>
            
        </div>
    );
};

export default Payment;