import React from 'react';
import "./menu.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logoutUser, getUser } from '../../redux/reducer';
import axios from 'axios';

const Menu = (props) => {

  const logoutUser = () => {
    axios
      .post('/auth/logout')
      .then(res => {
        this.props.logoutUser();
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='menu-container'>
      {
        props.isLoggedIn ?
          <nav id='menu-nav'>
            <h1 id='menu-header'>MyGameStash</h1>
            <ul id='menu-list-container'>
              <li className='menu-list'><Link to="/home">Games</Link></li>
              <li className='menu-list'><Link to="/user">My List</Link></li>
              <li className='menu-list'><Link to="/contact">Contact</Link></li>
              <li className='menu-list' onClick={logoutUser}><Link to="/">Logout</Link></li>
            </ul>
          </nav>
          :
          <div style={{ display: 'none' }}></div>
      }
    </div >
  )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { logoutUser, getUser })(Menu);