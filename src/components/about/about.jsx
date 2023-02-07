import React from 'react'
import "./about.css";
import Me from '../../assets/me-about.webp';
import {BsAward} from 'react-icons/bs';
import {AiOutlineFolderOpen} from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        
        <div className='about__me'>
          <div className='about__me-image'>
            <img src= {Me} alt='about' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          I am looking for a Job to build my carrier in software industry. I am a student of Information Technology and a keen learner to the subject. 
          I have hands on experience in Cascading Style Sheets:CSS, C/C++ Programming Language, JavaScript. 
          Also know basics of database and server handling.
          And I will give my best performance wherever I will endeavour.
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>

        </div>

      </div>

    </section>
  )
}

export default About