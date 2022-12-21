import React from 'react'
import { Navbar, Container, Nav, Form, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./AppNavbar.css"


const AppNavbar = () => {
  return(
    <Navbar expand="lg" className = "navbarColor">
      <Container fluid>
      <Link to = "/" className='navbar__logo'>HAPPY</Link>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Link to="/" className='NavUl'>Home</Link>
            <Link to="/Men" className='NavUl'>Men's</Link>
            <Link to="/W" className='NavUl'>Women's</Link>
            <Link to="/K" className='NavUl'>Kid's</Link> */}
            
            
            <NavDropdown title="HAPPY" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/pants">Pants</NavDropdown.Item>
              <NavDropdown.Item href="/pants">
                T-Shirts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/pants">
                Shirts
              </NavDropdown.Item>
              <NavDropdown.Item href="/pants">
                Pant Coat
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ENJOY" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/enjoy">Pants</NavDropdown.Item>
              <NavDropdown.Item href="/enjoy">
                T-Shirts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/enjoy">
                Shirts
              </NavDropdown.Item>
              <NavDropdown.Item href="/enjoy">
                Pant Coat
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="FUN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/fun">Pants</NavDropdown.Item>
              <NavDropdown.Item href="/fun">
                T-Shirts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/fun">
                Shirts
              </NavDropdown.Item>
              <NavDropdown.Item href="/fun">
                Pant Coat
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="BLESS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/bless">Pants</NavDropdown.Item>
              <NavDropdown.Item href="/bless">
                T-Shirts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/bless">
                Shirts
              </NavDropdown.Item>
              <NavDropdown.Item href="/bless">
                Pant Coat
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="BLOKE" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/bloke">Pants</NavDropdown.Item>
              <NavDropdown.Item href="/bloke">
                T-Shirts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/bloke">
                Shirts
              </NavDropdown.Item>
              <NavDropdown.Item href="/bloke">
                Pant Coat
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="LILBEE" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Pants</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                T-Shirts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Shirts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Pant Coat
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="HUNAR" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Pants</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                T-Shirts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Shirts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Pant Coat
              </NavDropdown.Item>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar