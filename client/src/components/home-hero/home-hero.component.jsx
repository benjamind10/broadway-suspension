import React from 'react';
import { Link } from "react-router-dom";
import EngineeringPic from '../../assets/casterplate.png';
import CoiloverPic from '../../assets/e90coilover.png';
import HeroLogo from '../../assets/hero-logo.png';

import './home-hero.styles.css';

const HomeHero = () => {
    return (
        <div className='container hero-container pt-3'>
            <div className='row justify-content-center'>
                <Link to='/about' className='col-12 col-md-6 hero-img p-0'>
                    <img src={EngineeringPic} alt='Engineering Picture' />
                </Link>

                <div className='hero-logo text-center'>
                    <img src={HeroLogo} alt='BWS 10 Year Anniversary' />
                </div>

                <Link to='/about' className='col-12 col-md-6 hero-img p-0'>
                <img src={CoiloverPic} alt='Coilover Picture' />
                </Link>
            </div>
        </div>
    );
};

export default HomeHero;