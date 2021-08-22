import React, { useState, useEffect } from 'react'
import Signin from '../components/signin'
import axios from 'axios'
import Loader from '../components/loader'

const Login = ({ history }) => {
  const [isLoaded, setIsLoader] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      return history.push('/statut')
    }
  }, [])

  const submit = (e, formState, setErrorMessage, history, apiUrl) => {
    e.preventDefault()
    try {
      const datas = {
        email: formState.email,
        password: formState.password
      }
      axios({
        method: 'POST',
        url: apiUrl,
        data: datas
      })
        .then(res => {
          if (res) {
            setIsLoader(true)
            localStorage.setItem('token', res.headers['auth-token'])
            history.push({
              pathname: '/statut',
              state: {
                data: res.data
              }
            })
          }
        })
        .catch(res => {
          setErrorMessage(res.response.data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoaded) {
    return <Loader />
  }

  return (
    <div className='login'>
      <Signin submit={submit} />
    </div>
  )
}

export default Login
