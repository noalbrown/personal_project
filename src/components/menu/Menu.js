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
    <div>
      {
        props.isLoggedIn ?
          <nav>
            < ul >
              <li><Link to="/home">Games</Link></li>
              <li><Link to="/user">My List</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li onClick={logoutUser}><Link to="/">Logout</Link></li>
            </ul >
          </nav >
          :
          <h2>Please Log In</h2>
      }
    </div >
  )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { logoutUser, getUser })(Menu);