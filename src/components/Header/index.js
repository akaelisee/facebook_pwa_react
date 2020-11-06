import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <header className='App-header'>
      <div className='nave'>
        <Link to='/'> Logo </Link> |<Link to='/'> Login </Link> |
        <Link to='/characters'> Status </Link>
      </div>
    </header>
  )
}

export default Header
