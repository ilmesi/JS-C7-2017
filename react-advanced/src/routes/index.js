import React from 'react'
import { Route } from 'react-router'
import Home from '../containers/Home'
import Login from '../containers/Login'

const Routes = (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
  </div>
)

export default Routes
