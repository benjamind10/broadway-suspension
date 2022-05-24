import React from 'react';

import HomeHero from '../components/home-hero/home-hero.component';
import ReviewCards from '../components/review-cards/review-cards.component';
import Cart from '../components/cart/cart.component';

const Home = () => {
  return (
    <div className='container'>
      <HomeHero />
      <ReviewCards />
    </div>
  );
};

export default Home;
