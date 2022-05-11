import React from 'react';
import { Link } from 'react-router-dom';

import EngineeringPic from '../../assets/casterplate.png';
import CoiloverPic from '../../assets/e90coilover.png';
import HeroLogo from '../../assets/hero-logo.png';

import './home-hero.styles.css';

const HomeHero = () => {
  return (
    <div className='container hero-container pt-3'>
      <div className='row justify-content-center'>
        <Link
          to='/about'
          className='col-12 col-md-6 eng-hero-img p-0'
        >
          <img src={EngineeringPic} alt='Engineering Picture' />
          <div className='engineering-text text-center text-white p-4'>
            <h6>Learn more about our engineering process...</h6>
          </div>
        </Link>

        <div className='hero-logo text-center'>
          <img src={HeroLogo} alt='BWS 10 Year Anniversary' />
        </div>

        <Link
          to='/about'
          className='col-12 col-md-6 coil-hero-img p-0'
        >
          <img src={CoiloverPic} alt='Coilover Picture' />
          <div className='coilover-text text-white text-center p-4'>
            <h6>Learn more about our suspension products...</h6>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
