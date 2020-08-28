import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import User from './components/user/User';
import Contact from './components/contact/Contact'
import Admin from './components/admin/Admin'

export default (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/home' component={Home} />
    <Route path='/user' component={User} />
    <Route path='/contact' component={Contact} />
    <Route path='/admin' component={Admin} />
  </Switch>
);