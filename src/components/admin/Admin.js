import React from 'react';
import './admin.css'

const Admin = (props) => {
  return (
    <div className='admin-container'>
      <h1>ADMINISTRATOR AREA</h1>
      <table>
        <ul>
          <li>
            <tr className='delete-me-test-data'>
              <th>Username</th>
              <th>Game list</th>
              <th>Form Input</th>
              <th>Remove User</th>
            </tr>
            <tr className='delete-me-test-data'>
              <td>SomeUserName</td>
              <td>UsersGameList</td>
              <td>UsersFormInputs</td>
              <button>Delete User</button>
            </tr>
          </li>
        </ul>
      </table>
    </div>
  )
}

export default Admin;