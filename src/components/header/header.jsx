import React from 'react';
import './header.css';
import CTA from "./CoreToAction";

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Shrey Asthana</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default header