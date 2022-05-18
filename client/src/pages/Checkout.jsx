import React, { Component } from 'react';

import { useStoreContext } from '../utils/GlobalState';

// import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.css';

const Checkout = () => {
  const [state, dispatch] = useStoreContext();

  console.log(state);

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
      {/* {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))} */}
      <div className='total'>TOTAL: $</div>
    </div>
  );
};

export default Checkout;
