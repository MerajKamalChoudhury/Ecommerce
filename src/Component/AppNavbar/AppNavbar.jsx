import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Backdrop from "../Sidedrawer/Backdrop";
import Sidebar from "../Sidedrawer/Sidebar";
import Toolbar from "../Sidedrawer/Toolbar";
import "./AppNavbar.css";
import "../Sidedrawer/Style.css";
import { useState } from "react";
import {FiShoppingCart} from "react-icons/fi"
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

          <Link to="/" className="navbar__logo">
            HAPPY
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            > 
           {/* <Link to="/" className='NavUl'>Home</Link>
            <Link to="/Men" className='NavUl'>Men's</Link>
            <Link to="/W" className='NavUl'>Women's</Link>
            <Link to="/K" className='NavUl'>Kid's</Link>  */}

              <NavDropdown title="HAPPY" >
                <NavDropdown.Item href="/pants">BOYS</NavDropdown.Item>
                <NavDropdown.Item href="/pants">GIRLS</NavDropdown.Item>
                <NavDropdown.Item href="/pants">T-Shirts</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/pants">Shirts</NavDropdown.Item>
                <NavDropdown.Item href="/pants">Pant Coat</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="ENJOY" >
                <NavDropdown.Item href="/enjoy">BOYS</NavDropdown.Item>

                <NavDropdown.Item href="/enjoy">GIRLS</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/enjoy">Pants</NavDropdown.Item>
                <NavDropdown.Item href="/enjoy">T-Shirts</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/enjoy">Shirts</NavDropdown.Item>
                <NavDropdown.Item href="/enjoy">Pant Coat</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="FUN" >
                <NavDropdown.Item href="/fun">BOYS</NavDropdown.Item>
               <NavDropdown.Item href="/fun">GIRLS</NavDropdown.Item>
                 <NavDropdown.Item href="/enjoy">Pants</NavDropdown.Item>
                 <NavDropdown.Item href="/fun">T-Shirts</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="/fun">Shirts</NavDropdown.Item>
                 <NavDropdown.Item href="/fun">Pant Coat</NavDropdown.Item>
               </NavDropdown>
               <NavDropdown title="BLESS" >{/*id="navbarScrollingDropdown"> */}
                  <NavDropdown.Item href="/bless">Pants</NavDropdown.Item>
                 <NavDropdown.Item href="/bless">BOYS</NavDropdown.Item>
                 <NavDropdown.Item href="/bless">GIRLS</NavDropdown.Item>
                 <NavDropdown.Item href="/enjoy">Pants</NavDropdown.Item>
                 <NavDropdown.Item href="/bless">T-Shirts</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="/bless">Shirts</NavDropdown.Item>
                 <NavDropdown.Item href="/bless">Pant Coat</NavDropdown.Item>
               </NavDropdown> 
                <NavDropdown title="BLOKE" > 
                 <NavDropdown.Item href="/bloke">BOYS</NavDropdown.Item>

                 <NavDropdown.Item href="/bloke">GIRLS</NavDropdown.Item>
                 <NavDropdown.Item href="/bloke">Pants</NavDropdown.Item>
                 <NavDropdown.Item href="/bloke">T-Shirts</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="/bloke">Shirts</NavDropdown.Item>
                 <NavDropdown.Item href="/bloke">Pant Coat</NavDropdown.Item>
               </NavDropdown>
               <NavDropdown title="LILBEE" >
                  <NavDropdown.Item href="/lilbee">BOYS</NavDropdown.Item>
                 <NavDropdown.Item href="/lilbee">GIRLS</NavDropdown.Item>
                 <NavDropdown.Item href="/lilbee">Pants</NavDropdown.Item>
                 <NavDropdown.Item href="/lilbee">T-Shirts</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="/lilbee">Shirts</NavDropdown.Item>
                 <NavDropdown.Item href="/lilbee">Pant Coat</NavDropdown.Item>
              </NavDropdown>
               <NavDropdown title="HUNAR" >
                 <NavDropdown.Item href="#action3">Pants</NavDropdown.Item>
                 <NavDropdown.Item href="#action4">T-Shirts</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="#action5">Shirts</NavDropdown.Item>
                 <NavDropdown.Item href="#action5">Pant Coat</NavDropdown.Item>
               </NavDropdown>
             </Nav> 
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Find your best matches"
                className="me-2"
                aria-label="Search" 
              />
              <Button variant="outline-success searchBtn">Search</Button>
            </Form>

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
