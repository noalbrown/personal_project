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

  const deleteUser = (user_id, user_contact_id, user_game_id) => {
    axios
      .delete(`/api/deleteUser/${(user_id, user_contact_id, user_game_id)}`)
      .then((res) => {
        return res.data
      })
      .catch(error => console.log(error))
  }

  return (
    <div className='admin-container'>
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
            <td>
              <button onClick={deleteUser}>Delete User</button>
            </td>
          </tr>)}
        </thead>
      </table>
    </div>
  )
}

export default Admin;