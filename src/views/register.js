import React from 'react'
import { Container } from '../styles/Container'
import Signout from '../components/signout'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Wrapper } from '../styles/Wrapper'
import FooterRegister from '../components/footerRegister'

const Register = () => {
  const history = useHistory()
  const submitRegister = (
    e,
    formStateRegister,
    setErrorMessageRegister,
    apiUrl
  ) => {
    e.preventDefault()

    try {
      if (formStateRegister.password !== formStateRegister.cpassword) {
        setErrorMessageRegister('La confirmation du mot de passe est incorrect')
        return
      }

      const datas = {
        firstname: formStateRegister.firstname,
        lastname: formStateRegister.lastname,
        email: formStateRegister.email,
        password: formStateRegister.password,
        cpassword: formStateRegister.cpassword
      }

      console.log(datas)

      axios({
        method: 'POST',
        url: apiUrl,
        data: datas
      })
        .then(res => {
          // console.log(res)
          history.push({
            pathname: '/login'
          })
        })
        .catch(error => {
          setErrorMessageRegister(error.response.data)
        })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Wrapper>
        <div className='col-fr'>
          <p className='title'> Inscrivez-vous en tout sécurité ? </p>
          <Signout submitRegister={submitRegister} />

          <div className='btn_group'>{/* <span> Démarrer </span> */}</div>
        </div>

        <FooterRegister />
      </Wrapper>
    </Container>
  )
}

Register.propTypes = {}

export default Register
