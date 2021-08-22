import React, { useEffect } from 'react'
import { RiSettings5Fill } from 'react-icons/ri'
import { Logo } from '../components/logo'
import { Link, useHistory } from 'react-router-dom'
import { ContainerHome } from '../styles/Container'

const Home = () => {
  const history = useHistory()
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      return history.push('/statut')
    }
  }, [])
  return (
    <ContainerHome>
      <div className='logo__home'>
        <Logo />
      </div>
      <div className='link__home'>
        <p>
          <RiSettings5Fill />
        </p>
        <p>
          <Link to='/torejoin'>S&lsquo;inscrire sur Facebook </Link>{' '}
        </p>
        <p>
          <Link to='/login'>Se connecter </Link>{' '}
        </p>
      </div>
    </ContainerHome>
  )
}

export default Home
