import React, { useState } from 'react'
import Navbaar from './components/Navbaar/Navbaar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Place Order/PlaceOrder'
import './App.css'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/loginPopup/LoginPopup'


// This is the main app component, which renders the navigation bar and the routes for the Home, Cart, and Place Order pages.
const App = () => {
  
  const[showLogin,SetShowLogin]=useState(false)

  return (
    <>
    {showLogin?<LoginPopup SetShowLogin={SetShowLogin}/>:<></>}
    <div className ="app">
      <Navbaar setShowLogin={SetShowLogin}/>
      <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/cart' element ={<Cart />} />
      <Route path='/order' element ={<PlaceOrder/>} />


      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
