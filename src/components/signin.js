import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer, BtnSubmit, Form } from '../styles/Login'
import { Banner } from './logo'

const Signin = ({ submit }) => {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')
  const apiUrl = 'https://easy-login-api.herokuapp.com/users/login'
  const history = useHistory()

  const handleFocus = () => {
    setErrorMessage('')
  }

  return (
    <>
      <HeaderContainer className='login'>
        <div className="image__login">
          <Banner />
        </div>
        <Form
          onSubmit={e => submit(e, formState, setErrorMessage, history, apiUrl)}
        >
          <div className="form__login">
            <div className="form__group">
              <input
                className="form__text"
                onFocus={handleFocus}
                type='text'
                name='username'
                placeholder='Adresse e-mail'
                onChange={e =>
                  setFormState({ ...formState, username: e.target.value })
                }
              />
            </div>
            <div className="form__group">
              <input
                className="form__mdp"
                type='password'
                name='password'
                onFocus={handleFocus}
                placeholder='Mot de passe'
                onChange={e =>
                  setFormState({ ...formState, password: e.target.value })
                }
              />
            </div>  
          <BtnSubmit type='submit' value='Connexion' />
          </div>
          <p style={{ color: 'red', textAlign: 'center' }}> {errorMessage} </p>
        </Form>
        <div>
          retour
        </div>
        <div>
          ou
          Créer un compte
        </div>
      </HeaderContainer>
    </>
  )
}

export default Signin
