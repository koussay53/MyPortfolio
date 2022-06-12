import React from 'react'
import './header.css'
import CTA from './CTA'
import kou from '../../assets/kou.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
        <div className="container header_container">
        <h5>Hi There, I'm</h5>
        <h1>Belfahem Koussay</h1>
         <h5 className="text-light">Full-stack Developer</h5>
         <CTA />
         <HeaderSocials />

         <div className='me'>
             <img src={kou} alt='kk' />  
         </div>

         <a href='#contact'className='scroll__down'>Scroll Down</a>
         </div>
   </header>
  )
}

export default Header