import React from 'react';
import {NavDropdown} from 'react-bootstrap'


const Sidebar = ({sidebar}) => {
  return (
    <>
      <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
      
        <li>ALL</li>
        <li>BOYS</li>
        <li>GIRLS</li>
        <NavDropdown title="BRANDS" id="Dropdown">
             
             <NavDropdown.Item href="/pants">
               Happy
             </NavDropdown.Item>
             <NavDropdown.Item href="/pants">
               Enjoy
             </NavDropdown.Item>
             <NavDropdown.Item href="/pants">
               Fun
             </NavDropdown.Item>
             <NavDropdown.Item href="/pants">
               Bless
             </NavDropdown.Item>
        </NavDropdown>     
            
      </div>
      </>
  )
}

export default Sidebar
