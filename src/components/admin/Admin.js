import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './admin.css';

const Admin = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/usersAdmin")
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteUser = (user_id) => {
    axios
      .delete(`/api/deleteUser/${(user_id)}`)
      .then((res) => {
        setUsers(res.data)
      })
      .catch(error => console.log(error))
  }

  return (
    <div className='admin-container' style={{ backgroundColor: 'black' }}>
      <h1>ADMINISTRATOR AREA</h1>
      <table>
        <thead>
          <tr className='admin-table-row'>
            <th>Username:</th>
            <th>Game list:</th>
            <th>Form Input:</th>
            <th>Remove User:</th>
          </tr>
          {users.map((el, i) => <tr key={i} className='admin-table-row'>
            <td>{el.user_name}</td>
            <td>{el.user_games}</td>
            <td>{el.form}</td>
            <td id='admin-button-container'>
              <button onClick={() => deleteUser(el.user_id)}>"Delete User"</button>
            </td>
          </tr>)}
        </thead>
      </table>
    </div>
  )
}

export default Admin;