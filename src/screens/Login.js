import React, { useState, useEffect } from 'react'
import Signin from '../components/signin'
import axios from 'axios'
const submit = (e, formState, setErrorMessage, history) => {
  e.preventDefault()

  if (!formState.username || !formState.password) {
    setErrorMessage('Remplissez les champs')
    return
  }
  axios({
    method: 'POST',
    url: 'https://easy-login-api.herokuapp.com/users/login',
    data: {
      username: formState.username,
      password: formState.password
    }
  }).then(res => {
    localStorage.setItem('token', res.headers['x-access-token'])
    history.push({
      pathname: '/statut',
      state: {
        message: res.data,
        username: formState.username
      }
    })
  })
}
const Login = ({ history }) => {
  useEffect(() => {
    localStorage.getItem('token') && history.push('/statut')
  }, [])

  return (
    <div className='login'>
      <Signin submit={submit} />
    </div>
  )
}

export default Login
