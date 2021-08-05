import React, { useState } from 'react'
import Signin from '../components/signin'
import axios from 'axios'
import Loader from '../components/loader'

const Login = ({ history }) => {
  const [isLoaded, setIsLoader] = useState(false)

  const submit = (e, formState, setErrorMessage, history, apiUrl) => {
    e.preventDefault()
    try {
      // if (!formState.email || !formState.password) {
      //   setErrorMessage('Veuillez remplir les champs')
      //   if (!formState.email) {
      //     setErrorMessage('Veuillez entrer un email')
      //     return
      //   } else if (!formState.password) {
      //     setErrorMessage(' Veuillez entrer un mot de passe')
      //     return
      //   }
      //   return
      // } else if (formState.password.length < 6) {
      //   setErrorMessage(
      //     ' Veuillez entrer un mot de passe superieur a 5 caractéres'
      //   )
      //   return
      // }

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
          localStorage.setItem('token', res.headers['auth-token'])
          console.log(res.data)
          // setIsLoader(true)
          // history.push({
          //   pathname: '/statut',
          //   state: {
          //     data: res.data
          //   }
          // })
        })
        .catch(res => {
          // console.log(res.response.data)
          setErrorMessage(res.response.data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return !isLoaded ? (
    <div className='login'>
      <Signin submit={submit} />
    </div>
  ) : (
    <Loader />
  )
}

export default Login
