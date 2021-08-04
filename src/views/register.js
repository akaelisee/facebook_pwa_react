import React from 'react'
import PropTypes from 'prop-types'
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
      // if (
      //   !formStateRegister.lastname ||
      //   !formStateRegister.firstname ||
      //   !formStateRegister.email ||
      //   !formStateRegister.password
      // ) {
      //   setErrorMessageRegister('Veuillez remplir les champs')
      //   if (!formStateRegister.lastname) {
      //     setErrorMessageRegister('Veuillez entrer un Nom')
      //     return
      //   } else if (!formStateRegister.firstname) {
      //     setErrorMessageRegister(' Veuillez entrer un prenom')
      //     return
      //   } else if (!formStateRegister.email) {
      //     setErrorMessageRegister(' Veuillez entrer email')
      //     return
      //   }
      //   return
      // } else if (formStateRegister.password.length < 6) {
      //   setErrorMessageRegister(
      //     'Veuillez entrer un mot de passe superieur a 5 caractéres'
      //   )
      //   return
      // }

      const datas = {
        firstname: formStateRegister.firstname,
        lastname: formStateRegister.lastname,
        email: formStateRegister.email,
        password: formStateRegister.password
      }

      console.log(datas)

      // fetch('http://localhost:4000/register/user', {
      //   method: 'post',
      //   body: JSON.stringify(data)
      // }).then(res => {
      //   console.log(res)
      // })

      axios({
        method: 'POST',
        url: 'http://localhost:4000/register/user',
        data: JSON.stringify(datas)
      }).then(res => {
        console.log('ok')
        console.log(res)
        // history.push({
        //   pathname: '/login'
        // })
      })
    } catch (error) {
      console.log(error)
      setErrorMessageRegister(
        'Veuillez vous connecter avec le compte que vous avez déjà créé.'
      )
    }
  }
  return (
    <Container>
      <Wrapper>
        <div className='col-fr'>
          <p className="title"> Comment vous appelez-vous ? </p>
          <Signout submitRegister={submitRegister} /> 

          {/* <p className="text"> Nous vous aiderons à créer un compte en quelques étapes. </p> */}
          <div className='btn_group'>
            {/* <Link to='/register'> Démarrer </Link> */}
          </div>
        </div>

        <FooterRegister />
      </Wrapper>
    </Container>
  )
}

Register.propTypes = {}

export default Register
