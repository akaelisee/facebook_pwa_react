import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import banniere from '../../assets/banniere.jpeg'
import Styles from '../styledComponents'

const Signin = ({ submit }) => {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')
  const apiUrl = process.env.REACT_APP_API_URL
  const history = useHistory()

  const handleFocus = () => {
    setErrorMessage('')
  }

  return (
    <>
      <Styles.HeaderContainer className='login'>
        <Styles.ContainerImage>
          <Styles.ImageBanniere
            src={banniere}
            className='img-responsive'
            alt='Image'
          />
        </Styles.ContainerImage>
        <Styles.Form
          onSubmit={e => submit(e, formState, setErrorMessage, history, apiUrl)}
        >
          <Styles.FormGroup>
            <Styles.InputGroupA
              onFocus={handleFocus}
              type='text'
              name='username'
              placeholder='Nom Utilisateur'
              onChange={e =>
                setFormState({ ...formState, username: e.target.value })
              }
            />
            <Styles.InputGroupB
              type='password'
              name='password'
              onFocus={handleFocus}
              placeholder='Mot de passe'
              onChange={e =>
                setFormState({ ...formState, password: e.target.value })
              }
            />
          </Styles.FormGroup>
          <Styles.BtnSubmit type='submit' value='Connexion' />
          <p style={{ color: 'red', textAlign: 'center' }}> {errorMessage} </p>
        </Styles.Form>
        {/* <Loader /> */}
      </Styles.HeaderContainer>
    </>
  )
}

export default Signin
