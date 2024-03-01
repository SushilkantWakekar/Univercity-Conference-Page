import React from 'react';
import './index.css';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
      <FaFacebook className='social-icons'/>
      <FaXTwitter className='social-icons'/>
      <FaInstagramSquare className='social-icons' />

      <div className='address-bar'>
        <FaLocationDot className='social-icons'/>
        <div>
          <p className='name'>X-university</p>
          <p>XYZ Road X-Country </p>
          <p>Y-District </p>
          <p>Pin : 000</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer