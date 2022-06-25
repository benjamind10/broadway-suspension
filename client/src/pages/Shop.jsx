import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import ProductList from '../components/product-list/product-list.component';

const Shop = () => {
  const { id } = useParams();

  return (
    <Container>
      <div className='row justify-content-around'>
        <ProductList id={id} />
      </div>
    </Container>
  );
};

export default Shop;
