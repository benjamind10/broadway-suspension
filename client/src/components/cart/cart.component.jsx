import React, { useEffect } from 'react';
import CartItem from '../cart-item/cart-item.component';
import Auth from '../../utils/auth';
import './cart.styles.css';

import { useStoreContext } from '../../utils/GlobalState';
import {
  TOGGLE_CART,
  ADD_MULTIPLE_TO_CART,
} from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import CartIcon from '../../assets/shoppingcart.svg';


const Cart = () => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

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

  if (!state.cartOpen) {
    return (
      <div className='cart-closed' onClick={toggleCart}>
        <span role='img' aria-label='trash'>
          <img className='cart-icon' src={CartIcon} alt='shopping cart' />
        </span>
      </div>
    );
  }
  console.log(state);

  return (
    <div className='cart cart-styles text-light'>
      <div className='close' onClick={toggleCart}>
        <h8>[close]</h8>
      </div>
      <div className='cart-header mt-4'>
      <h2 className='font-italic'>Shopping Cart</h2>
      </div>
      {state.cart.length ? (
        <div>
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className='row space-between justify-content-center text-center'>
            <h6 className='col-12'>Total: ${calculateTotal()}</h6>
            {Auth.loggedIn() ? (
              <button className='btn btn-primary m-1 col-10'>Checkout</button>
            ) : (
              <span><h6>(log in to check out)</h6></span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role='img' aria-label='shocked'>
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
