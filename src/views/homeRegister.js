import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../styles/Container'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FooterRegister from '../components/footerRegister'
import { Wrapper } from '../styles/Wrapper'

const HomeRegister = () => {
  return (
    <Container>
      <Wrapper>
        <div className='col-fr'>
          <p className='title'> Rejoignez Facebook Pwa </p>
          <p className='text'>
            Nous vous aiderons à créer un compte en quelques étapes.
          </p>
          <div className='btn_group'>
            <Link to='/register'> Démarrer </Link>
          </div>
        </div>
        {/* footer */}
        <FooterRegister />
      </Wrapper>
    </Container>
  )
}

HomeRegister.propTypes = {}

export default HomeRegister
