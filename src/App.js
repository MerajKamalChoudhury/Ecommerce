import './App.css';
import AppNavbar from './Component/AppNavbar/AppNavbar'
// import Footer from './Component/Footer'
import Home from './Component/Home/Home'
import ProductDetails from './Component/ProductDetails/ProductDetails'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
// import Pants from './Component/Pages/Pants';
import Enjoy from './Component/Pages/Enjoy';
import Fun from './Component/Pages/Fun';
import Bless from './Component/Pages/T-shirt';
import Bloke from './Component/Pages/Bloke';
import Lilbee from './Component/Pages/Lilbee';
import Hunar from './Component/Pages/Hunar';
import Pants from './Component/Pages/Pants';

import Login from "./Component/Pages/Login";
import Search from "./Component/Pages/Search";
import Cart from "./Component/Pages/Cart";
import Help from "./Component/Pages/Help";
// import Brands from './Component/Home/Brands';

// import Backdrop from './Component/Sidedrawer/Backdrop';
// import Sidebar from './Component/Sidedrawer/Sidebar';
// import Toolbar from './Component/Sidedrawer/Toolbar';


// import ProductComponent from "./Component/ProductComponent/ProductComponent"

function App() {
  return (
    <>
      <AppNavbar />
      {/* <Brands /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='product/:productId' element={<ProductDetails />} />
        <Route path='/pants' element={<Pants />} />
        <Route path='/enjoy' element={<Enjoy />} />
        <Route path='/fun' element={<Fun />} />
        <Route path='/bless' element={<Bless />} />
        <Route path='/bloke' element={<Bloke />} />
        <Route path='/lilbee' element={<Lilbee />} />
        <Route path='/hunar' element={<Hunar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<Search />} />
        <Route path='/help' element={<Help />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      {/* <ProductComponent /> */}

      {/* <ProductDetails /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
