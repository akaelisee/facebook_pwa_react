import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
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

        <div className="signin__first">
          <div className="signin__form">
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

            {/* link back and password forget */}
            <div className="signin__link">
              <p> Mot de passe oublié ? </p>
              <p><Link to="/"> Retour </Link></p>
            </div>
          </div>
          <div className="signin__second">
            <div className="register__party">
                <span> ou </span>
            </div>
            <div className="btn__register">
              <Link to="/register"> Créer un compte </Link>
            </div>
          </div>
        </div>

      </HeaderContainer>
    </>
  )
}

export default Signin
