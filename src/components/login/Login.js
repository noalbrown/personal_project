import React, { useState } from 'react';
import axios from 'axios';
import { getUser } from '../../redux/reducer';
import { connect } from 'react-redux';
import './login.css'

const Login = (props) => {
  const [toggle, setToggle] = useState(true);
  const [userNameInput, setUserName] = useState('');
  const [emailInput, setEmail] = useState('');
  const [firstNameInput, setFirstName] = useState('');
  const [lastNameInput, setLastName] = useState('');
  const [passwordInput, setPassword] = useState('');

  const handleUserNameInput = (event) => {
    const { value } = event.target;
    setUserName(value);
  };

  const handleEmailInput = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleFirstNameInput = (event) => {
    const { value } = event.target;
    setFirstName(value);
  };

  const handleLastNameInput = (event) => {
    const { value } = event.target;
    setLastName(value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    axios
      .post("/auth/login", {
        email: emailInput,
        password: passwordInput,
      })
      .then((res) => {
        props.getUser();
        props.history.push("/home");
      })
      .catch((err) => {
        alert("Email or password incorrect");
      });
  };

  const register = () => {
    axios
      .post("/auth/register", {
        userNameInput,
        emailInput,
        passwordInput,
        firstNameInput,
        lastNameInput
      })
      .then((res) => {
        props.getUser();
        props.history.push("/home");
      })
      .catch((err) => {
        alert("Email is already registered");
      });
  };

  const boxSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }

  const newUserButtonStyle = {
    backgroundColor: 'rgb(7, 224, 54)',
    borderStyle: 'none',
    height: '100%',
    width: '100%',
    fontSize: '1rem',
    fontWeight: 'bolder'
  }

  return (
    <div className='login-container'>
      <header id='login-header'>MyGameStash</header>
      {toggle ? (
        <section className='login-sections'>
          <div className='login-boxes'>
            <div style={boxSectionStyle}>
              <input className='login-input'
                name='email'
                type='text'
                value={emailInput}
                placeholder='Email'
                onChange={handleEmailInput}
              />
            </div>
            <div style={boxSectionStyle}>
              <input className='login-input'
                name='password'
                type='password'
                value={passwordInput}
                placeholder='Password'
                onChange={handlePasswordInput}
              />
            </div>
          </div>
          <div id='login-button-container'>
            <button
              id='login-button'
              onClick={login}
            >LOGIN</button>
          </div>
          <div id='create-user-button-container'>
            <button
              id='create-user-button'
              onClick={() => { setToggle(!toggle) }}
            >Create New User</button>
          </div>
        </section>
      ) : (
          <section className='login-sections'>
            <div className='login-boxes'>
              <div style={boxSectionStyle}>
                <input className='new-user-input'
                  name='user_name'
                  type='text'
                  value={userNameInput}
                  placeholder='User Name'
                  onChange={handleUserNameInput}
                />
              </div>
              <div style={boxSectionStyle}>
                <input className='new-user-input'
                  name='email'
                  type='text'
                  value={emailInput}
                  placeholder='Email'
                  onChange={handleEmailInput}
                />
              </div>
              <div style={boxSectionStyle}>
                <input className='new-user-input'
                  name='password'
                  type='password'
                  value={passwordInput}
                  placeholder='Password'
                  onChange={handlePasswordInput}
                />
              </div>
              <div style={boxSectionStyle}>
                <input className='new-user-input'
                  name='first_name'
                  type='text'
                  value={firstNameInput}
                  placeholder='First Name'
                  onChange={handleFirstNameInput}
                />
              </div>
              <div style={boxSectionStyle}>
                <input className='new-user-input'
                  name='last_name'
                  type='text'
                  value={lastNameInput}
                  placeholder='Last Name'
                  onChange={handleLastNameInput}
                />
              </div>
            </div>
            <div style={{ height: '10%', width: '40%' }}>
              <button
                style={newUserButtonStyle}
                onClick={register}
              >Create Profile</button>
            </div>
            <div style={{ width: '30%' }}>
              <button
                style={newUserButtonStyle}
                onClick={() => { setToggle(!toggle) }}
              >Cancel</button>
            </div>
          </section>
        )}
    </div>
  )
}

export default connect(null, { getUser })(Login);