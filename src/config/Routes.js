import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import Login from '../views/Login'
import Statut from '../views/Statut'
import Home from '../views/home'
import PrivateRoute from '../utils/privateRoute'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute path='/statut' component={Statut} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
