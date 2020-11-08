import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import Login from '../screens/Login'
import Statut from '../screens/Statut'
import PrivateRoute from '../utils/privateRoute'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute path='/statut' component={Statut} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
