import React from 'react'
import "./Home.css"
import AppButton from '../AppButton/AppButton'
import ProductListing  from "../ProductListing/ProductListing"
import Slider from '../Extra/Slider'



const Home = () => {
  return (
    <>
    <Slider/>
    <div>
      <img src='./images/ZARA2.jpg'/>
    </div> 
      <div className="home__main__container">

        <div className='home__main__container__left'>
          <div >
            <h3 className='home__main__container-firstHeading'>Trending Items</h3>
            <h1 className='home__main__container-mainHeading'>Lastest Fashion Sale</h1>
            <h3 className='home__main__container-priceHeading'>Starting at <span>₹299.00</span></h3>
          </div>
          <AppButton title = "Shop Now" />
        </div>

        <div className='home__main__container__right'>
          <img src='https://i.ibb.co/qk5YRyS/img.jpg' alt='homebg' className='home__main__container__right-img' /></div>
      </div>
      <ProductListing />
     

    </>
  )
}

export default Home