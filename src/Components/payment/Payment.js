import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51IhQMbELTftKLgMsAODgqRWNDZqTXjubfKsb3As06MuhHrFA59YsVu0pE61fEWL8zCaYjlNYcviR324zw4Kwbxl3004e4jHDRa');

const Payment = ({handlePayment}) => {
  return (
    <Elements style={{width: "100px"}} stripe={stripePromise}>
     <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
    </Elements>
  );
};
export default Payment;