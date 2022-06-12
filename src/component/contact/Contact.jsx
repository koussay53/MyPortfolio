import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sp4erpz', 'template_vjsb866', form.current, 'bXkRlC99tjQgSUsNq')

     e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
        <h5> Get In Touch</h5>
        <h2>Contact Me</h2>
        
        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
               <MdOutlineMail className='contact_option-icon'/>
               <h4>Email</h4>
               <h5>koussaybelfahem@gmail.com</h5>
               <a href="mailto:koussaybelfahem@gmail.com" target='_blank'>Send a message</a>
            </article>
            <article className="contact_option">
               <RiMessengerLine className='contact_option-icon'/>
               <h4>Messenger</h4>
               <h5>koussay belfahem</h5>
               <a href="https://m.me/profile.php?id=100005069286259" target='_blank'>Send a message</a>
            </article>
            <article className="contact_option">
               <AiOutlineWhatsApp className='contact_option-icon'/>
               <h4>WhatsApp</h4>
               <h5>+21627104506</h5>
               <a href="https://api.whatsapp.com/send?phone27104506" target='_blank'>Send a message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
             <input type='text' name='name' placeholder='Your Full Name' required/>
             <input type='email'  name='email' rows='7' placeholder='Your Email' required />
             <textarea name="message" id="7" placeholder='Your Message' required></textarea>
             <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact