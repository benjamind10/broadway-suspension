import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import './footer.styles.css';

const Footer = () => {
  return (
    <div>
      <footer className='site-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <h6>About</h6>
              <p className='text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, doloribus nam
                officia molestias at dolor, quos temporibus eius dolore neque aliquam qui magnam
                consequuntur, ex non provident ipsam ab voluptates.
              </p>
            </div>

            <div className='col-xs-6 col-md-3'>
              <h6>Products</h6>
              <ul className='footer-links'>
                <li>
                  <a href='/'>Merch</a>
                </li>
                <li>
                  <a href='/'>Springs</a>
                </li>
                <li>
                  <a href='/'>Parts and Accessories</a>
                </li>
                <li>
                  <a href='/'>BWS Top Hats</a>
                </li>
              </ul>
            </div>

            <div className='col-xs-6 col-md-3'>
              <h6>Quick Links</h6>
              <ul className='footer-links'>
                <li>
                  <a href='/about/'>About Us</a>
                </li>
                <li>
                  <a href='/about'>Contact Us</a>
                </li>
                <li>
                  <a href='/'>Contribute</a>
                </li>
                <li>
                  <a href='http://scanfcode.com/privacy-policy/'>Privacy Policy</a>
                </li>
                <li>
                  <a href='/'>Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 col-sm-6 col-xs-12'>
              <p className='copyright-text'>
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>

            <div className='col-md-4 col-sm-6 col-xs-12'>
              <ul className='social-icons'>
                <li>
                  <a className='facebook' href='/'>
                    <i className='fa-brands fa-facebook-f'></i>
                  </a>
                </li>
                <li>
                  <a className='twitter' href='/'>
                    <i className='fa-brands fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a className='instagram' href='/'>
                    <i className='fa-brands fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a className='youtube' href='/'>
                    <i className='fa-brands fa-youtube'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
