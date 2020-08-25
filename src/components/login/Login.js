import React from 'react';

const Login = (props) => {
  return (
    <div>
      <h1>MyGameStash</h1>
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