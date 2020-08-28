import React from 'react';
import './contact.css'

const Contact = (props) => {
  return (
    <div className='contact-container'>
      <section>
        <h1>Contact Form</h1>
        <div>
          <input
            name='user_name'
            type='text'
            value={}
            placeholder='User name'
            onChange={}
          />
          <input
            name='email'
            type='text'
            value={}
            placeholder='Email'
            onChange={}
          />
        </div>
        <form></form>
        <div>
          <button>SUBMIT</button>
        </div>
      </section>
    </div>
  )
}

export default Contact;