import React, { Component, useEffect } from 'react';

import { useStoreContext } from '../utils/GlobalState';
import { TOGGLE_CART } from '../utils/actions';

import PaymentForm from '../components/payment-form/payment-form.component';
import CheckoutItem from '../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
  const [state, dispatch] = useStoreContext();
  const cartItems = state.cart;

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  useEffect(() => {
    toggleCart();
  }, [state.cart]);

  useEffect(() => {
    calculateTotal();
  }, [state.cart]);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {state.cart.map(cartItem => (
        <CheckoutItem key={cartItem._id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${calculateTotal()}</div>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
