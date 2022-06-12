import React from 'react'
import './experience.css' ;
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
             <h3>Frontend Development</h3>
         <div className='experience_content'>
           <article className='experience_details'>
               <BsPatchCheckFill className='experience_detais-icons'/>
               <h4>HTML</h4>
           </article>
           <article className='experience_details'>
               <BsPatchCheckFill className='experience_detais-icons' />
               <h4>CSS</h4>
           </article>
           <article className='experience_details'>
               <BsPatchCheckFill className='experience_detais-icons' />
               <div>
               <h4>Bootstrap</h4>
               <h4>React Bootstrap</h4>
               </div>
           </article>
           
           <article className='experience_details'>
               <BsPatchCheckFill className='experience_detais-icons' />
               <h4>MUI</h4>
           </article>
           <article className='experience_details'>
               <BsPatchCheckFill className='experience_detais-icons' />
               <h4>JavaScript</h4>
           </article>
           <article className='experience_details'>
               <BsPatchCheckFill className='experience_detais-icons' />
               <h4>React js</h4>
           </article>
         </div>    
        </div>
        <div className='experience_backend'>
             <h3>Backend Development</h3>
         <div className='experience_content'>
           <article className='experience_details'>
               <BsPatchCheckFill className='experience_detais-icons' />
               <h4>Node js</h4>
           </article>
           <article className='experience_details'>
               <BsPatchCheckFill className='experience_detais-icons' />
               <h4>Express</h4>
           </article>
           <article className='experience_details'>
               <BsPatchCheckFill className='experience_detais-icons' />
               <h4>MongoDB</h4>
           </article>
           <article className='experience_details'>
               <BsPatchCheckFill className='experience_detais-icons' />
               <h4>MySQL</h4>
           </article>
           
         </div> 
        </div>

      </div>
    </section>
  )
}

export default Experience