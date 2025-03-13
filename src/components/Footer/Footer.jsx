import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id ='footer'>
        <div className="footer_content">
            <div className="footer_content_left">
                <img src={assets.logo} alt="logo"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In vero dolorum porro laborum architecto nesciunt, accusamus quo reprehenderit minus natus? At omnis tenetur ipsum veniam fuga nobis sapiente necessitatibus recusandae.</p>
                <div className="footer_social_icons">
                    <img src={assets.facebook_icon} alt="facebook_icon" />
                    <img src={assets.twitter_icon} alt="twitter_icon" />
                    <img src={assets.linkedin_icon} alt="linked_icon" />
                </div>
            </div>
            <div className="footer_content_center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
            </div>
            <div className="footer_content_right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+91 9348574287</li>
                    <li>biswajitpadhan2001@gmail.com</li>
                </ul>
            </div>
        </div>
      <hr/>
      <p className='footer_copyright'>�� 2022 Biswajit. All rights reserved.</p>
    </div>
  )
}

export default Footer
