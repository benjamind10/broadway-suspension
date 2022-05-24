import React from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import Button from '../button/button.component';

const PaymentForm = () => {
  return (
    <div>
      <h2>Credit Card Payment:</h2>
      <CardElement />
      <button>Pay Now</button>
    </div>
  );
};

export default PaymentForm;
