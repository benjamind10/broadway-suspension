import React, { useState, useEffect } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_USER } from '../../utils/queries';
import { ADD_ORDER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { idbPromise } from '../../utils/helpers';

import './payment-form.styles.css';
import CheckoutForm from '../shipping/shipping.component';

const PaymentForm = ({ cartItems, cartTotal, shipping }) => {
  const stripe = useStripe();
  const elements = useElements();

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
    <div>
      <form onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement className='mt-3' />
        <button className='btn btn-primary mt-4'>Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
