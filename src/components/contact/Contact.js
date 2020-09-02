import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';

const Contact = (props) => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [formInput, setFormInput] = useState('');

  const handleNameInput = (event) => {
    const { value } = event.target;
    setNameInput(value);
  };

  const handleEmailInput = (event) => {
    const { value } = event.target;
    setEmailInput(value);
  };

  const handleFormInput = (event) => {
    const { value } = event.target;
    setFormInput(value);
  };

  const submit = () => {
    axios
      .post('/api/post', {
        user_name: nameInput,
        email: emailInput,
        form: formInput
      })
      .then((res) => {
        setNameInput('')
        setEmailInput('')
        setFormInput('')
      })
      .catch((err) => {
        alert("Cannot submit");
      });
  };

  return (
    <div className='contact-container'>
      <section id='contact-box'>
        <h1>Contact Form</h1>
        <form>
          <div className='contact-inputs'>
            <div>
              <input
                name='user_name'
                type='text'
                value={nameInput}
                placeholder='Username'
                onChange={handleNameInput}
              />
            </div>
            <div>
              <input
                name='email'
                type='text'
                value={emailInput}
                placeholder='Email'
                onChange={handleEmailInput}
              />
            </div>
          </div>
          <div id='contact-form'>
            <input
              name='form'
              type='text'
              value={formInput}
              placeholder='How can we help you?'
              onChange={handleFormInput}
            />
          </div>
        </form>
        <div id='contact-button'>
          <button
            onClick={submit}>SUBMIT</button>
        </div>
      </section>
    </div>
  )
}

export default Contact;