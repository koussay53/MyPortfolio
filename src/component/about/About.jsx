import React from 'react'
import './About.css';
import ME from '../../assets/ME.jpg'
import {MdPhoneAndroid} from 'react-icons/md'
import {MdOutlineMailOutline} from 'react-icons/md'
const About = () => {
  return (
    <section id='about'> 
        <h5>Get To Know</h5>
        <h2>About Me</h2>
     <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME}alt="About Image"/>
            </div>
           </div>
       

     <div className='about_content'>
       <div className='about_cards'>
         <article className='about_card'>
         <MdPhoneAndroid  className='about_icon'/>
           <h5>My Phone :</h5>
           <small>27104506</small> 
         </article>

         <article className='about_card'>
         <MdOutlineMailOutline className='about_icon'/>
           <h5> Email :</h5>
           <small>koussaybelfahem@gmail.com</small> 
         </article>
         </div>
           <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque eos voluptatem eius dolorem
               maiores nihil ducimus at rem ullam reprehenderit quidem quia deserunt,molestiae,eligendi
               amet repellat molestias quos totam.
           </p>
           <a href='#contact' className='btn btn-primary'>Let's Talk</a>
       </div>
     
     </div>
    </section>
  )
}

export default About