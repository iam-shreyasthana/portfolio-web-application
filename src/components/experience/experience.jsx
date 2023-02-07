import React from 'react'
import './experience.css';
import {FiCheckCircle} from 'react-icons/fi';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have?</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>FrontEnd Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

    {/*..................... End Of Front End ..................... */}

        <div className='experience__backend'>
          <h3>BackEnd Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheckCircle className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience