import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>B.Koussay</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='about'> About</a></li>
        <li><a href='experience'>My Skills</a></li>
        <li><a href='service'>Portfolio</a></li>
        <li><a href='contact'>Contact</a></li> 
      </ul>

      <div className='footer_socials'>
          <a href='https://facebook.com'><FaFacebook /></a>
          <a href='https://instagram.com'><BsInstagram /></a>
      </div>

      <div className='footer_copyright'>
          <small>
            &belfahem koussay. All rights reserved 
          </small>
      </div>
    </footer>
  )
}

export default Footer