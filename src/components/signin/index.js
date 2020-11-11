import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import banniere from '../../assets/banniere.jpeg'
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
      <HeaderContainer className='login'>
        <ContainerImage>
          <ImageBanniere
            src={banniere}
            className='img-responsive'
            alt='Image'
          />
        </ContainerImage>
        <Form
          onSubmit={e => submit(e, formState, setErrorMessage, history, apiUrl)}
        >
          <FormGroup>
            <InputGroupA
              onFocus={handleFocus}
              type='text'
              name='username'
              placeholder='Nom Utilisateur'
              onChange={e =>
                setFormState({ ...formState, username: e.target.value })
              }
            />
            <InputGroupB
              type='password'
              name='password'
              onFocus={handleFocus}
              placeholder='Mot de passe'
              onChange={e =>
                setFormState({ ...formState, password: e.target.value })
              }
            />
          </FormGroup>
          <BtnSubmit type='submit' value='Connexion' />
          <p style={{ color: 'red', textAlign: 'center' }}> {errorMessage} </p>
        </Form>
        {/* <Loader /> */}
      </HeaderContainer>
    </>
  )
}
const HeaderContainer = styled.div`
  background-color: #fff;
`
const ContainerImage = styled.div`
  margin-bottom: 25px;
`

const ImageBanniere = styled.img`
  width: 100%;
`
const Form = styled.form`
  width: 88%;
  margin: 0 auto;
`
const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

const InputGroupA = styled.input`
  width: 100%;
  padding: 10px 0;
  border-bottom: transparent !important;
  border: 1px solid #aaaaaa;
  border-radius: 2px 2px 0 0;
  outline: none;
  font-size: 16px;
  ::placeholder {
    padding-left: 5px;
  }
`
const InputGroupB = styled.input`
  width: 100%;
  padding: 10px 0;
  border: 1px solid #aaaaaa;
  border-radius: 0 0 2px 2px;
  outline: none;
  font-size: 16px;
  ::placeholder {
    padding-left: 5px;
  }
`
const BtnSubmit = styled.input`
  width: 100%;
  padding: 10px 0;
  background-color: #1877f2;
  border: transparent;
  border-radius: 5px;
  color: #f2eded;
  font-size: 16px;
  margin-bottom: 10px;
`
export default Signin
