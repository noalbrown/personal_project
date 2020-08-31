import React from 'react';
import './user.css'

const User = (props) => {
  return (
    <div className='user-container'>
      <ul>
        <img alt='GameImage' />
        <li>Game Details</li>
        <button>X</button>
      </ul>
    </div>
  )
}

export default User;