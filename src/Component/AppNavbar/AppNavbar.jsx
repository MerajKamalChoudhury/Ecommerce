import React from "react";
import {
  Navbar,
  Container,
  Nav,
  // Form,
  // NavDropdown,
  // Button,
} from "react-bootstrap";
// import { Link } from "react-router-dom";
import Backdrop from "../Sidedrawer/Backdrop";
import Sidebar from "../Sidedrawer/Sidebar";
import Toolbar from "../Sidedrawer/Toolbar";
import "./AppNavbar.css";
import "../Sidedrawer/Style.css";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi"
import styled from "styled-components";
import { NavLink } from "react-router-dom";



const AppNavbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  const CartIcon = styled.nav`
  
    .cart-icon{
      position: absolute;
      top: 15px;
      left: -10px;
    }


    .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          /* font-size: 1.0rem; */
          font-size: 0.8em;
          font-weight: 500;
          text-transform: uppercase;
          color:blueviolet;
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: red;
        }
      }
      .cart-trolley--link {
      position: relative;
      .cart-trolley {
        position: relative;
        /* font-size: 1.8rem; */
        font-size: 1.2rem;
      }
      .cart-total--item {
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color:#fff;
      }
    }
  `;

  return (
    <div className="navfixed">

      <Navbar expand="lg" className="navbarColor">
        <Container fluid>
          <Toolbar openSidebar={toggleSidebar} />
          <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
          <Sidebar sidebar={sidebar} />
          {/* <Toolbar/>
      <Sidebar/>
      <Backdrop/> */}

          <NavLink to="/" className="navbar__logo">
            HAPPY
          </NavLink>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll></Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Find your best matches"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success searchBtn">Search</Button>
            </Form> */}

            <div className="navComp">
              <NavLink to="/search" style={{ textDecoration: 'none', color: 'black' }}>
                <div className="searchNavbar" style={{ cursor: 'pointer' }}>
                  <span>Search</span>
                  <span className="searchUnderline">_______________</span>
                </div>
              </NavLink>
              <div className="lhNav">
                <NavLink to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="loginNavebar" style={{ cursor: 'pointer' }}>Login</div>
                </NavLink>
                <NavLink to="/help" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="helpNavebar" style={{ cursor: 'pointer' }}>Help</div>
                </NavLink>
              </div>
            </div>

            <div className="set-pos" style={{
              marginLeft: '30px',
              marginRight: '17px'
            }}>
              <CartIcon className='cart-icon'>
                <NavLink to="/cart" className="navbar-link cart-trolley--link">
                  <FiShoppingCart className="cart-trolley" />
                  <span className="cart-total--item"> 10 </span>
                </NavLink>
              </CartIcon>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
};

export default AppNavbar;
