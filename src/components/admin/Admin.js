import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './admin.css';

const Admin = (props) => {
  const [user, setUsers] = useState([{ user_name: '' }]);
  const [gameList, setGameList] = useState([{ user_games: '' }]);
  const [formList, setFormList] = useState([{ form: '' }]);

  useEffect(() => {
    axios
      .get("/api/usersAdmin")
      .then((res) => {
        setUsers(res.data)
        setGameList(res.data)
        setFormList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteUser = (user_id) => {
    axios
      .delete(`/api/deleteUser/${user_id}`)
      .then((res) => {
        return res.data
      })
      .catch(error => console.log(error))
  }
  console.log(user, gameList, formList)
  return (
    <div className='admin-container'>
      <h1>ADMINISTRATOR AREA</h1>
      <table>
        <ul>
          <li>
            <tr className='admin-table-row'>
              <th>Username:</th>
              <th>Game list:</th>
              <th>Form Input:</th>
              <th>Remove User:</th>
            </tr>
            <tr className='admin-table-row'>
              <td>{user[0].user_name}</td>
              <td>{gameList[0].user_games}</td>
              <td>{formList[0].form}</td>
              <button onClick={deleteUser}>Delete User</button>
            </tr>
          </li>
        </ul>
      </table>
    </div>
  )
}

export default Admin;