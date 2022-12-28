import React from 'react';
import {NavDropdown} from 'react-bootstrap'


const Sidebar = ({sidebar}) => {
  return (
      <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
        
        <li>BRANDS</li>
        <li>BOYS</li>
        <li>GIRLS</li>
        <NavDropdown title="HAPPY" id="navbarScrollingDropdown">
             
             <NavDropdown.Item href="/pants">
               BOYS
             </NavDropdown.Item>
             <NavDropdown.Item href="/pants">
               GIRLS
             </NavDropdown.Item>
        </NavDropdown>     
            
      </div>
  )
}

export default Sidebar
