import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({SetShowLogin}) => {
    const [currState, setCurrState] = useState('Login');
  return (
    <div className='LoginPopup'>
       <form className="login_pop_container">
         <div className='Login_pop_title'>
            <h2>{currState}</h2>
            <img onClick ={()=>SetShowLogin(false)}src={assets.cross_icon} alt='cross_icon' />
         </div>
         <div className="login_popup_input">
          {currState ==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
          
          <input type="email" placeholder='Your Email' required/>
          <input type="password" placeholder='Password' required/>
         </div>
         <button>{currState==="Sign UP"?"Create Account":"Login" }</button>
         <div className="login_popup_condition">
          <input type="checkbox" required/>
          <p>I agree to the Terms and Conditions</p>
         </div>
          {currState ==="Login" ?<p>Create a new account <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>:
          <p>Already have an account <span onClick={()=>setCurrState("Login")} >Login Here</span></p>}
       </form>
     
    </div>
  )
}

export default LoginPopup
