import React, { useState } from 'react';

// import ProductList from '../components/product-list/product-list.component';
// import CategoryMenu from '../components/category-menu/category-menu.component';
import HomeHero from '../components/home-slideshow/home-slideshow.component'
import Cart from '../components/cart/cart.component';

const Home = () => {
  return (
    <div className='container'>
      <HomeHero />
      <Cart />
    </div>
  );
};

export default Home;
