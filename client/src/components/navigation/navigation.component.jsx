import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Navbar, Nav, Dropdown } from "rsuite";
import BwsLogo from '../../assets/bws-logo.png';
import "rsuite/dist/rsuite.min.css";
import "./navigation.styles.css";

function Navigation() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className='flex-row'>
          <li className='mx-1'>
            <Link to='/orderHistory'>Order History</Link>
          </li>
          <li className='mx-1'>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href='/' onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className='flex-row'>
          <li className='mx-1'>
            <Link to='/signup'>Signup</Link>
          </li>
          <li className='mx-1'>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <container className='row justify-content-center nav-container'>
      <div classNam='col-12 col-md-2 nav-logo' href='#'><img src={BwsLogo} className='nav-logo' alt='Broadway Logo' /></div>
      <div className='col-12 col-md-8'>
        <Navbar pullRight>
          <Nav>
            <Nav.Item className='nav-item' icon=''>Home</Nav.Item>
            <Nav.Item className='nav-item'>News</Nav.Item>
            <Nav.Item className='nav-item'>Products</Nav.Item>
            <Dropdown className='nav-item' title='Shop by Make'>
              <Dropdown.Item className='nav-item'>BMW</Dropdown.Item>
              <Dropdown.Item className='nav-item'>Audi</Dropdown.Item>
            </Dropdown>
          </Nav>
          <Nav pullRight>
            <Nav.Item icon=''>Settings</Nav.Item>
          </Nav>
        </Navbar>
      </div>
    </container>
  );
}

export default Navigation;
