import React from 'react';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { Card, Button, Container, Row } from 'react-bootstrap';

import { useStoreContext } from '../../utils/GlobalState';
import {
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
} from '../../utils/actions';
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
    <Container>
      <Row>
        <Card className='col-4' style={{ width: '18rem' }}>
          <Link to={`/products/${_id}`}>
            <Card.Img variant='top' src={`/images/${image}`} />
          </Link>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <br />
            <div>
              {quantity} {pluralize('item', quantity)} in stock
            </div>
            <Button variant='primary' onClick={addToCart}>
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default ProductItem;
