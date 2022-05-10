import React, { useState } from 'react';

import ProductList from '../components/product-list/product-list.component';
import CategoryMenu from '../components/category-menu/category-menu.component';
import HomeHero from '../components/home-hero/home-hero.component';
import ReviewCards from '../components/review-cards/review-cards.component';
import Cart from '../components/cart/cart.component';

const CamberPlatesTopMounts = () => {
  return (
    <div className='container'>
      <ProductList />
      <Cart />
    </div>
  );
};

export default CamberPlatesTopMounts;