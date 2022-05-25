import React, { useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import Auth from '../../utils/auth';

import Button from '../button/button.component';

const PaymentForm = ({ cartTotal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [state, dispatch] = useStoreContext();
  const { data } = useQuery(QUERY_USER);

  let user;
  if (data) {
    user = data.user;
  }

  console.log(Auth.loggedIn());

  const [isProcessingPayment, setIsProcessingPayment] =
    useState(false);

  const paymentHandler = async e => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch('/api/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then(res => {
      return res.json();
    });

    console.log(response);
    const clientSecret = response.client_secret;

    const paymentResult = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: Auth.loggedIn() ? user.firstName : 'Guest',
          },
        },
      }
    );

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };

  return (
    <div>
      <form onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <button>Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
