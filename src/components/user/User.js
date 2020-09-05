import React from 'react';
import { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './user.css';

const User = (props) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (props.user) {
      getGame();
    }
  }, [props.user]);

  const getGame = () => {
    axios
      .get(`/api/userList/${props.user.user_id}`)
      .then((res) => {
        setUserList(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const deleteGame = (user_game_id) => {
    axios
      .delete(`/api/deleteGame/${(user_game_id)}`)
      .then((res) => {
        getGame();
      })
      .catch(error => console.log(error))
  }

  return !userList[0] ? (
    <div id="user-empty">
      <h2>You have 0 games in your list</h2>
      <p>Please head to the <Link style={{ color: 'white', fontSize: '1.5rem' }} to='/home'>GAMES</Link> page and choose some games.</p>
    </div>
  ) : (
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