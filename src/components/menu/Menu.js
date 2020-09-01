import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { logoutUser, getUser } from '../../redux/reducer';
import axios from 'axios';
import "./menu.css";

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
      {props.isLoggedIn ?
        <nav id='menu-nav'>
          <h1 id='menu-header'>MyGameStash</h1>
          <ul id='menu-list-container'>
            {props.location.pathname !== "/home" ?
              <li className='menu-list'><Link to="/home">Games</Link></li>
              : null}
            {props.location.pathname !== "/user" ?
              <li className='menu-list'><Link to="/user">My List</Link></li>
              : null}
            {props.location.pathname !== "/contact" ?
              <li className='menu-list'><Link to="/contact">Contact</Link></li>
              : null}
            <li className='menu-list' onClick={logoutUser}><Link to="/">Logout</Link></li>
          </ul>
        </nav>
        : null}
    </div >
  )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { logoutUser, getUser })(withRouter(Menu));


// This is another way you can include your links
/* <Link>
         <p onClick={()=>this.props.history.push('/home')}>Games</p>
         <p onClick={()=>this.props.history.push('/user')} My List</p>
         <p onClick={()=>this.props.history.push('/contact')} >Contact</p>
         <Button onClick={this.logoutUser}>Logout</Button>
      </Link> */