import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import ProductList from '../components/product-list/product-list.component';
import Cart from '../components/cart/cart.component';

const Bmw = () => {
  const { id } = useParams();
  return (
    <Container>
      <div className='container'>
        <div className='row justify-content-around'>
          <ProductList id={id} />
        </div>
      </div>
      <Cart />
    </Container>
  );
};

export default Bmw;
