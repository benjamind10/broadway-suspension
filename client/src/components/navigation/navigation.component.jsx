import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Navbar, Nav, Dropdown } from "rsuite";
import BwsLogo from "../../assets/bws-logo.png";
import "rsuite/dist/rsuite.min.css";
import "./navigation.styles.css";

function Navigation() {
  const state = {
    collapseID: "",
  };

  const toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Nav pullRight>
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
      <a className='col-8 col-md-2 nav-logo' href='/'>
        <img src={BwsLogo} className='nav-logo' alt='Broadway Logo' />
      </a>
      <div className='col-12 col-md-8 desktop-nav'>
        <Navbar pullRight>
          <Nav>
            <Nav.Item href='/' className='nav-item'>
              Home
            </Nav.Item>
            <Nav.Item href='/about' className='nav-item'>
              About
            </Nav.Item>
            <Nav.Item href='/camber-plates' className='nav-item'>
              Camber Plates & Top Mounts
            </Nav.Item>
            <Dropdown className='nav-item' title='Shop by Make'>
              <Link to='/bmw'>
                <Dropdown.Item href='/bmw' className='nav-item'>
                  BMW
                </Dropdown.Item>
              </Link>
              <Link to='/audi'>
                <Dropdown.Item href='/audi' className='nav-item'>
                  Audi
                </Dropdown.Item>
              </Link>
            </Dropdown>
          </Nav>
          <Nav pullRight>{showNavigation()}</Nav>
        </Navbar>
      </div>
      <div className='col-4 mobile-nav'>
        
      </div>
    </div>
  );
}

export default Navigation;
