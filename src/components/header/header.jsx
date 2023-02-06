import React from 'react';
import './header.css';
import CTA from "./CoreToAction";
import Me from "../../assets/me.jpg";
import HeaderSocial from './headerSocials';

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Shrey Asthana</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className='.me'>
          <img src= {Me} alt='me' />
        </div>
        
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header