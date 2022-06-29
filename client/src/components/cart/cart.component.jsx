import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';

import CartItem from '../cart-item/cart-item.component';
import Auth from '../../utils/auth';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import CartIcon from '../../assets/shoppingcart.svg';

import './cart.styles.css';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

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

  useEffect(() => {
    if (data) {
      stripePromise.then(res => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  if (!state.cartOpen) {
    return (
      <div className='cart-closed' onClick={toggleCart}>
        <span role='img' aria-label='trash'>
          <img className='cart-icon' src={CartIcon} alt='shopping cart' />
        </span>
      </div>
    );
  }

  const routeChange = () => {
    let path = `/checkout`;
    history.push(path);
  };

  return (
    <div className='cart cart-styles text-light'>
      <div className='close' onClick={toggleCart}>
        <p>[close]</p>
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
              <button
                onClick={routeChange}
                className='btn btn-primary m-1 col-10'
              >
                Checkout
              </button>
            ) : (
              <span>
                <h6>(log in to check out)</h6>
              </span>
            )}
          </div>
        </div>
      ) : (
        <h3>You haven't added anything to your cart yet!</h3>
      )}
    </div>
  );
};

export default Cart;
