import React from 'react';
import { Link } from 'react-router-dom';

import { pluralize } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

import './product-item.styles.css';

function ProductItem(item) {
  const { image, name, _id, price, quantity, description } = item;
  const [state, dispatch] = useStoreContext();

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find(cartItem => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className='card mb-5' style={{ width: '18rem' }}>
      <Link className='text-center' to={`/products/${_id}`}>
        <img
          src={`/images/${image}`}
          className='card-img-top'
          alt='product card'
        />
      </Link>
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>{description}</p>
        <br />
        <div>
          {quantity} {pluralize('item', quantity)} in stock
        </div>
        <div>
          <span>${price}</span>
        </div>
        <br />
        <button
          className='btn btn-success'
          variant='primary'
          onClick={addToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
