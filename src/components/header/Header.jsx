import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'
// import videoBg from '../../assets/technology introduction video web site.mp4'
const Header= () => {
  return (
    <header>
     <div className=".container header__container">
    
        <h5>Hello I'm</h5>
        <h1>Vyshali Vijaywargi</h1>
        <h5 className='text-light'>Front end Web Developer</h5>
        <CTA/>
        <HeaderSocials />
        <div className='me'>
        <img src={ME} alt='me' />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
     </div>
    </header>
  )
}

export default Header
