import React, { useState } from 'react';
import axios from 'axios';
import { getUser } from '../../redux/reducer';
import { connect } from 'react-redux';

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
  console.log(toggle)
  return (
    <div>
      <header>MyGameStash</header>
      {toggle ? (
        <section>
          <div>
            <input
              name='email'
              type='text'
              value={emailInput}
              placeholder='Email'
              onChange={handleEmailInput}
            />
            <input
              name='password'
              type='password'
              value={passwordInput}
              placeholder='Password'
              onChange={handlePasswordInput}
            />
          </div>
          <div>
            <button onClick={login}>LOGIN</button>
          </div>
          <div>
            <button onClick={() => { setToggle(!toggle) }}>Create New User</button>
          </div>
        </section>
      ) : (
          <section>
            <div>
              <input
                name='user_name'
                type='text'
                value={userNameInput}
                placeholder='User Name'
                onChange={handleUserNameInput}
              />
              <input
                name='email'
                type='text'
                value={emailInput}
                placeholder='Email'
                onChange={handleEmailInput}
              />
              <input
                name='password'
                type='password'
                value={passwordInput}
                placeholder='Password'
                onChange={handlePasswordInput}
              />
              <input
                name='first_name'
                type='text'
                value={firstNameInput}
                placeholder='First Name'
                onChange={handleFirstNameInput}
              />
              <input
                name='last_name'
                type='text'
                value={lastNameInput}
                placeholder='Last Name'
                onChange={handleLastNameInput}
              />
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