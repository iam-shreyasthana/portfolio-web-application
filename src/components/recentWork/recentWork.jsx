import React from 'react';
import "./recentWork.css";
import IMG1 from '../../assets/project1.png';
import IMG2 from '../../assets/project2.png';
import IMG3 from '../../assets/project3.png';
import IMG4 from '../../assets/project4.jpg';
import IMG5 from '../../assets/project5.png';
import IMG6 from '../../assets/project6.jpg';

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Minion Translator',
    github: 'https://github.com/iam-shreyasthana/minion-translator',
    demo: 'https://miniontranslatesite.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Emoji Interpreter',
    github: 'https://github.com/iam-shreyasthana/emoji-interpreter',
    demo: 'https://emoji-interpreter-site.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Exceptional Books',
    github: 'https://github.com/iam-shreyasthana/exceptional-books',
    demo: 'https://exceptional-books-site.netlify.app/'
  }
];

const RecentWork = () => {
  return (
    <section id='recentWork'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container recentWork__container'>
        
        {
          projects.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='recentWork__item'>
                <div className='recentWork__item-image'>
                  <img src={image} alt='title'/>
                </div>
                <h3>{title}</h3>
                <div className='recentWork__item-cta'>
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default RecentWork