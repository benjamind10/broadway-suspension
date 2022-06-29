import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_USER } from '../../utils/queries';
import { ADD_ORDER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { idbPromise } from '../../utils/helpers';

import './payment-form.styles.css';
import LoadingSpinner from '../spinner/spinner.component';

const PaymentForm = ({ cartItems, cartTotal, shipping }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);

  const { data } = useQuery(QUERY_USER);
  const [addOrder] = useMutation(ADD_ORDER);

  let user;
  if (data) {
    user = data.user;
  }

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

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

    const clientSecret = response.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: Auth.loggedIn() ? user.firstName : 'Guest',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');

        async function saveOrder() {
          const cart = await idbPromise('cart', 'get');
          const products = cart.map(item => item._id);

          if (products.length) {
            const { data } = await addOrder({
              variables: { products },
            });
            const productData = data.addOrder.products;

            productData.forEach(item => {
              idbPromise('cart', 'delete', item);
            });
          }
        }

        setTimeout(() => {
          window.location.assign('/');
        }, 3000);

        saveOrder();
      }
    }
  };

  return (
    <div className='text-center'>
      <h2>Credit Card Payment:</h2>
      {isProcessingPayment ? <LoadingSpinner /> : null}
      <CardElement className='mt-3' />
      <button
        onClick={paymentHandler}
        disabled={isProcessingPayment}
        className='btn btn-success mt-4 w-75'
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentForm;
