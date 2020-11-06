import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const Login = () => {
  let history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    e.preventDefault()
    Axios.post('https://easy-login-api.herokuapp.com/users/login', {
      username,
      password
    })
      .then(res => {
        if (username && password) {
          console.log(res)
          history.push({
            pathname: '/characters',
            state: {
              message: res.data,
              username: username
            }
          })
        } else {
          console.log('error')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleLoginChange = e => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label> Username </label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleLoginChange}
          />
        </div>
        <div className='form-group'>
          <label> password </label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <input type='submit' value='Valider' />
      </form>
    </div>
  )
}

export default Login
