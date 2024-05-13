import React from 'react';
import './nav.css';
import {BiHome} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai'
import {GoBook} from 'react-icons/go';
import {MdOutlineWorkOutline} from 'react-icons/md';
import {AiOutlineMessage} from 'react-icons/ai';
import { useState } from 'react';


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#' rel='noopener'
        onClick={() => setActiveNav('#')}
        className= {activeNav === '#' ? 'active' : ''}><BiHome />
      </a>
      <a href='#about' 
        onClick={() => setActiveNav('#about')} 
        className= {activeNav === '#about' ? 'active' : ''}><AiOutlineUser />
      </a>
      <a href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}><GoBook />
      </a>
      <a href='#recentWork'
        onClick={() => setActiveNav('#recentWork')}
        className={activeNav === '#recentWork' ? 'active' : ''}><MdOutlineWorkOutline />
      </a>
      <a href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage />
      </a>
    </nav>
  )
}

export default Nav;