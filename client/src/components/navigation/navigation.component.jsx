import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'rsuite';
import { useQuery } from '@apollo/client';
import 'rsuite/dist/rsuite.min.css';

import BwsLogo from '../../assets/bws-logo.png';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import Auth from '../../utils/auth';
import Cart from '../cart/cart.component';

import './navigation.styles.css';

function Navigation() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID:
        prevState.collapseID !== collapseID ? collapseID : '',
    }));
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Nav pullRight>
          <Nav.Item href='/orderHistory' className='nav-item'>
            Order History
          </Nav.Item>
          <Nav.Item
            href='/'
            onClick={() => Auth.logout()}
            className='nav-item'
          >
            Logout
          </Nav.Item>
        </Nav>
      );
    } else {
      return (
        <Nav pullRight>
          <Nav.Item href='/signup' className='nav-item'>
            Signup
          </Nav.Item>
          <Nav.Item href='/login' className='nav-item'>
            Login
          </Nav.Item>
        </Nav>
      );
    }
  }

  return (
    <div className='row justify-content-center nav-container'>
      <Cart />
      <a className='col-8 col-md-2 nav-logo' href='/'>
        <img src={BwsLogo} className='nav-logo' alt='Broadway Logo' />
      </a>
      <div className='col-12 col-md-6 desktop-nav'>
        <Navbar className='navbar' pullRight>
          <Nav>
            <Nav.Item href='/' className='nav-item'>
              Home
            </Nav.Item>
            <Nav.Item href='/about' className='nav-item'>
              About
            </Nav.Item>
            <Link to={`/camber-plates/${categories[2]?._id}`}>
              <Nav.Item href='/camber-plates' className='nav-item'>
                Camber Plates & Top Mounts
              </Nav.Item>
            </Link>
            <Dropdown className='nav-item' title='Shop by Make'>
              <Link to={`/bmw/${categories[0]?._id}`}>
                <Dropdown.Item href='/bmw' className='nav-item'>
                  BMW
                </Dropdown.Item>
              </Link>
              <Link to={`/volkswagen/${categories[1]?._id}`}>
                <Dropdown.Item href='/audi' className='nav-item'>
                  Volkswagen
                </Dropdown.Item>
              </Link>
            </Dropdown>
          </Nav>
          <Nav pullRight>{showNavigation()}</Nav>
        </Navbar>
      </div>
      <div className='col-4 mobile-nav'></div>
    </div>
  );
}

export default Navigation;
