import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../styles/Container'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeRegister = () => {
  return (
    <Container>
      <HomeToRejoin>
        <div className='first__torejoin'>
          <p> Rejoignez Facebook Pwa </p>
          <p> Nous vous aiderons à créer un compte en quelques étapes </p>
          <div>
            <Link to='/register'> Démarrer </Link>
          </div>
        </div>
        <div>
          <hr />
          <div className='second__torejoin'>
            <span> Vous avez deja un compte ? </span>
          </div>
        </div>
      </HomeToRejoin>
    </Container>
  )
}

HomeRegister.propTypes = {}

export default HomeRegister

const HomeToRejoin = styled.div``
