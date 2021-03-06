import React from 'react';

import { useStoreContext } from '../../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

const CartItem = ({ item }) => {
  const [state, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise('cart', 'delete', { ...item });
  };

  const onChange = e => {
    const value = e.target.value;

    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });

      idbPromise('cart', 'delete', { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });

      idbPromise('cart', 'put', {
        ...item,
        purchaseQuantity: parseInt(value),
      });
    }
  };

  return (
    <div className='flex-row bg-dark p-2 rounded-bottom'>
      <div>
        <img src={`/images/${item.image}`} alt='' />
      </div>
      <div>
        <div>
          <p className='font-italic '>
            <span className='font-weight-bold'>{item.name}</span>: $
            {item.price}
          </p>
        </div>
        <div>
          <span>Qty:</span>
          <input
            type='number'
            placeholder='1'
            value={item.purchaseQuantity}
            onChange={onChange}
            style={{ color: 'black' }}
          />

          <span
            role='img'
            aria-label='trash'
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
