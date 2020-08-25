import React from 'react'
import { Switch, Route } from 'react-router-dom'

export default (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/home' component={Home} />
    <Route path='/user' component={User} />
    <Route path='/contact' component={Contact} />
    <Route path='/admin' component={Admin} />
  </Switch>
);