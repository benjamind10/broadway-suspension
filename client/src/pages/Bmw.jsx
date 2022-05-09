import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import ProductList from '../components/product-list/product-list.component';
import CategoryMenu from '../components/category-menu/category-menu.component';
import HomeHero from '../components/home-hero/home-hero.component';
import ReviewCards from '../components/review-cards/review-cards.component';
import Cart from '../components/cart/cart.component';

const Bmw = () => {
  return (
    <Container>
      <ProductList />
      <Cart />
    </Container>
  );
};

export default Bmw;
