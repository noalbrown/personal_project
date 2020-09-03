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

  const deleteGame = (user_game_id) => {
    axios
      .delete(`/api/deleteGame/${(user_game_id)}`)
      .then((res) => {
        setUserList(res.data)
      })
      .catch(error => console.log(error))
  }

  return (
    <div className='user-container'>
      <h1>My List</h1>
      <table>
        <thead>
          {userList.map((el, i) => <tr key={i} className='user-table-row'>
            <td id='table-data-1'>{el.user_games.background_image}</td>
            <td id='table-data-2'>{el.user_games}</td>
            <td id='table-data-3'>
              <button onClick={() => deleteGame(el.user_game_id)}>X</button>
            </td>
          </tr>)}
        </thead>
      </table>
    </div>
  )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(withRouter(User));