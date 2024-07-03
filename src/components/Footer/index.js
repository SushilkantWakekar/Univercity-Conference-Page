import React from 'react';
import './index.css';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <FaFacebook className='social-icons'/>
      <FaXTwitter className='social-icons'/>
      <FaInstagramSquare className='social-icons' />

      
    </div>
  )
}

export default Footer