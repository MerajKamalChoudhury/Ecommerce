import React,{useState} from 'react'
import Backdrop from './Backdrop'
import Sidebar from './Sidebar'
import Toolbar from './Toolbar'

const Call = () => {

  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () =>{
      setSidebar((prevState) => !prevState)
  }

  return (
    <>
      <Toolbar openSidebar={toggleSidebar}/>
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
      <Sidebar sidebar={sidebar} />
    </>
  )
}

export default Call

