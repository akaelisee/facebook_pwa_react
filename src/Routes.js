import React, { Component } from 'react'
import Login from './screens/Login'
import { Route, withRouter } from 'react-router-dom'
import Characters from './screens/Characters'

export class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path='/' component={Login} />
        <Route exact path='/Characters' component={Characters} />
      </>
    )
  }
}

export default withRouter(Routes)
