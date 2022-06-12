import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
    <a href="https://github.com/koussay53"  target="_blank"><FaGithub/></a>
    <a href="https://facebook.com" target="_blank"><BsFacebook/></a>
    <a  href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocials 