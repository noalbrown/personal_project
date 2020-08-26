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

  return (
    <div className='login-container'>
      <header id='login-header'>MyGameStash</header>
      {toggle ? (
        <section className='login-sections'>
          <div className='login-boxes'>
            <div>
              <input className='login-input'
                name='email'
                type='text'
                value={emailInput}
                placeholder='Email'
                onChange={handleEmailInput}
              />
            </div>
            <div>
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
            <button id='login-button' onClick={login}>LOGIN</button>
          </div>
          <div id='create-user-button-container'>
            <button id='create-user-button' onClick={() => { setToggle(!toggle) }}>Create New User</button>
          </div>
        </section>
      ) : (
          <section className='login-sections'>
            <div className='login-boxes'>
              <div>
                <input className='login-input'
                  name='user_name'
                  type='text'
                  value={userNameInput}
                  placeholder='User Name'
                  onChange={handleUserNameInput}
                />
              </div>
              <div>
                <input className='login-input'
                  name='email'
                  type='text'
                  value={emailInput}
                  placeholder='Email'
                  onChange={handleEmailInput}
                />
              </div>
              <div>
                <input className='login-input'
                  name='password'
                  type='password'
                  value={passwordInput}
                  placeholder='Password'
                  onChange={handlePasswordInput}
                />
              </div>
              <div>
                <input className='login-input'
                  name='first_name'
                  type='text'
                  value={firstNameInput}
                  placeholder='First Name'
                  onChange={handleFirstNameInput}
                />
              </div>
              <div>
                <input className='login-input'
                  name='last_name'
                  type='text'
                  value={lastNameInput}
                  placeholder='Last Name'
                  onChange={handleLastNameInput}
                />
              </div>
            </div>
            <div>
              <button onClick={register}>Create Profile</button>
            </div>
            <div>
              <button onClick={() => { setToggle(!toggle) }}>Cancel</button>
            </div>
          </section>
        )}
    </div>
  )
}

export default connect(null, { getUser })(Login);