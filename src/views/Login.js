import React, { useState } from 'react'
import Signin from '../components/signin'
import axios from 'axios'
import Loader from '../components/loader'

const Login = ({ history }) => {
  const [isLoaded, setIsLoader] = useState(false)

  const submit = (e, formState, setErrorMessage, history, apiUrl) => {
    e.preventDefault()
    try {
      if (!formState.username || !formState.password) {
        setErrorMessage('Veuillez remplir les champs')
        if (!formState.username) {
          setErrorMessage('Veuillez entrer un username')
          return
        } else if (!formState.password) {
          setErrorMessage(' Veuillez entrer un mot de passe')
          return
        }
        return
      } else if (formState.password.length < 6) {
        setErrorMessage(
          ' Veuillez entrer un mot de passe superieur a 5 caractéres'
        )
        return
      }
      axios({
        method: 'POST',
        url: apiUrl,
        data: {
          username: formState.username,
          password: formState.password
        }
      }).then(res => {
        localStorage.setItem('token', res.headers['x-access-token'])
        history.push({
          pathname: '/statut',
          state: {
            username: formState.username
          }
        })
      })
      setIsLoader(true)
    } catch (error) {
      console.log(error)
    }
  }

  return isLoaded ? (
    <div className='login'>
      <Signin submit={submit} />
    </div>
  ) : (
    <Loader />
  )
}

export default Login
