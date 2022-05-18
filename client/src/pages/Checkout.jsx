import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import ProductList from '../components/product-list/product-list.component';
import Checkout from '../components/checkout/checkout.component';

const CheckoutPage = () => {
  const { id } = useParams();

  return (
    <Container>
      <Checkout />
    </Container>
  );
};

export default CheckoutPage;
