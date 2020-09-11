import React from 'react';
import { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { gameImgStyle } from '../home/HomeStyle';
import axios from 'axios';
import './user.css';

const User = (props) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (props.user) {
      getList();
    }
  }, [props.user]);

  const getList = () => {
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
        getList();
      })
      .catch(error => console.log(error))
  }

  return !userList[0] ? (
    <div id="user-empty">
      <h2>You have 0 games in your list</h2>
      <p>Please head to the <Link id="user-link" to='/home'>GAMES</Link> page and choose some games.</p>
    </div>
  ) : (
      <div className='user-container'>
        <h1>{props.user.first_name} {props.user.last_name}'s List</h1>
        <section>
          {userList.map((el, i) => <ul key={i} id='user-list-container'>
            <li id='user-li-1'>
              <img alt='GamePic' src={el.background_image} style={gameImgStyle} />
            </li>
            <li id='user-li-2'>{el.name}</li>
            <li id='user-li-3'>
              <button onClick={() => deleteGame(el.user_game_id)}>X</button>
            </li>
          </ul>)}
        </section>
      </div>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(withRouter(User));