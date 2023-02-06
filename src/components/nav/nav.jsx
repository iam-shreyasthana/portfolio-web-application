import React from 'react';
import './nav.css';
import {BiHome} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai'
import {GoBook} from 'react-icons/go';
import {RiServiceLine} from 'react-icons/ri';
import {AiOutlineMessage} from 'react-icons/ai';

const nav = () => {
  return (
    <nav>
      <a href='#'><BiHome /></a>
      <a href='#about'><AiOutlineUser /></a>
      <a href='#experience'><GoBook /></a>
      <a href='#services'><RiServiceLine /></a>
      <a href='#contact'><AiOutlineMessage /></a>
    </nav>
  )
}

export default nav