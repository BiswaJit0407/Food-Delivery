import React from 'react'
import './AppDownload.css'
import { assets } from '../../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app_download' id ='app_download'>
        <p>For Better Experience Download <br/> Food Delivery</p>
        <div className="app_download_platforms">
            <img src={assets.play_store} alt =""/>
            <img src={assets.app_store} alt =""/>
        </div>
      
    </div>
  )
}

export default AppDownload
