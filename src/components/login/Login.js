import React, { useState } from 'react';
import axios from 'axios';
import { getUser } from '../../redux/reducer';
import { connect } from 'react-redux';

const Login = (props) => {
  const [toggle, setToggle] = useState(true);
  const [emailInput, setEmail] = useState('');
  const [passwordInput, setPassword] = useState('');

  return (
    <div>
      <header>MyGameStash</header>
      <section>
        <div>
          <input name='email' type='text' value='' placeholder='Email' />
          <input name='password' type='password' value='' placeholder='Password' />
        </div>
        <div>
          <button>LOGIN</button>
        </div>
        <div>
          <button>Create New User</button>
        </div>
      </section>
      :
      <section>
        <div>
          <input name='email' type='text' value='' placeholder='Email' />
          <input name='password' type='password' value='' placeholder='Password' />
        </div>
        <div>
          <button>LOGIN</button>
        </div>
        <div>
          <button>Create New User</button>
        </div>
      </section>
    </div>
  )
}

export default Login;