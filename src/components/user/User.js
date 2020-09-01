import React from 'react';
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';
import './user.css';

const User = (props) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (props.user) {
      console.log(props.user)
      axios
        .get(`/api/userList/${props.user.user_id}`)
        .then((res) => {
          setUserList(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props.user]);

  const deleteList = (user_game_id) => {
    axios
      .delete(`/api/deleteUser/${(user_game_id)}`)
      .then((res) => {
        return res.data
      })
      .catch(error => console.log(error))
  }
  console.log(userList)
  return (
    <div className='user-container'>
      <h1>My List</h1>
      <table>
        <thead>
          {userList.map((el, i) => <tr key={i} className='user-table-row'>
            <td id='table-data-1'>{el.game_img}</td>
            <td id='table-data-2'>{el.user_games}</td>
            <td id='table-data-3'>
              <button onClick={deleteList}>X</button>
            </td>
          </tr>)}
        </thead>
      </table>
    </div>
  )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(withRouter(User));