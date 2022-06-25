import React, { useContext } from 'react';

import { useStoreContext } from '../../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

import './checkout.item.styles.css';

const CheckoutItem = ({ cartItem }) => {
  const [state, dispatch] = useStoreContext();
  const { name, image, price, purchaseQuantity } = cartItem;

  const onChange = e => {
    const value = e.target.value;

    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: cartItem._id,
      });

      idbPromise('cart', 'delete', { ...cartItem });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: cartItem._id,
        purchaseQuantity: parseInt(value),
      });

      idbPromise('cart', 'put', {
        ...cartItem,
        purchaseQuantity: parseInt(value),
      });
    }
  };

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise('cart', 'delete', { ...item });
  };

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img
          className='checkout-image'
          src={`../../../images/${image}`}
          alt={`${name}`}
        />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <input
          className='qty'
          type='number'
          placeholder='1'
          value={purchaseQuantity}
          onChange={onChange}
          style={{ color: 'black' }}
        />
      </span>
      <span className='price'> {price}</span>
      <div
        className='remove-button'
        onClick={() => removeFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
