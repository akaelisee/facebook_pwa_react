import React from 'react'
import { RiSettings5Fill } from 'react-icons/ri'
import { Logo } from '../components/logo'
import { Link } from 'react-router-dom'
import { ContainerHome } from '../styles/Container'

const Home = () => {
  return(
    <ContainerHome>
      <div className="logo__home">
        <Logo />
      </div>
      <div className="link__home">
        <p> <RiSettings5Fill /> </p>
        <p><Link to="/register">S'inscrire sur Facebook </Link> </p>
        <p> <Link to="/login">Se connecter </Link> </p>
      </div>
    </ContainerHome>
  )
}

export default Home

