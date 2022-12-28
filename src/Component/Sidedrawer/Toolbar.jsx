import React from 'react'
import {RxHamburgerMenu} from "react-icons/rx"

const Toolbar = ({openSidebar}) => {
  return (
    // <div className='tool-bar'>
      <div className="burger" onClick={openSidebar}>
        <RxHamburgerMenu/>
      </div>
      /* <div className='title'>SIDEBAR</div> */
        
    // </div>    

  )
}

export default Toolbar
