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
import LoginModal from '../loginmodal/loginmodal.component';

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
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Nav>
          <Nav.Item href='/orderHistory' className='nav-item'>
            Order History
          </Nav.Item>
          <Nav.Item href='/' onClick={() => Auth.logout()} className='nav-item'>
            Logout
          </Nav.Item>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <LoginModal />
        </Nav>
      );
    }
  }

  return (
    <div className='row justify-content-center nav-container'>
      <Cart  />
      <a className='col-12 col-sm-12 col-md-2 nav-logo' href='/'>
        <img src={BwsLogo} className='nav-logo' alt='Broadway Logo' />
      </a>
      <div className='col-12 col-sm-12 col-lg-8 desktop-nav'>
        <Navbar className='navbar'>
          <Nav>
            <Nav.Item href='/' className='nav-item'>
              Home
            </Nav.Item>
            <Nav.Item href='/about' className='nav-item'>
              About
            </Nav.Item>
            {/* Need to fix this double a problem */}
            <Link to={`/camber-plates/${categories[2]?._id}`}>
              <Nav.Item href='/camber-plates' className='nav-item camb-class'>
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
          <Nav>{showNavigation()}</Nav>
        </Navbar>
      </div>
      <div className='col-12 mobile-nav'>
        <Navbar className='navbar'>
          <Nav>
            <Dropdown className='nav-item' title='Menu'>
              <Link to='/'>
                <Dropdown.Item href='/' className='nav-item'>
                  Home
                </Dropdown.Item>
              </Link>
              <Link to='/about'>
                <Dropdown.Item href='/about' className='nav-item'>
                  About
                </Dropdown.Item>
              </Link>
              <Link to={`/camber-plates/${categories[2]?._id}`}>
                <Dropdown.Item href='/camber-plates' className='nav-item camb-class'>
                  Camber Plates & Top Mounts
                </Dropdown.Item>
              </Link>

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
          <Nav>{showNavigation()}</Nav>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
