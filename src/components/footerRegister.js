import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterRegister = () => {
  return (
    <Footer>
      <hr />
      <div className='text'>
        <Link to="/login"> Vous avez deja un compte ? </Link>
      </div>
    </Footer>
  )
}

export default FooterRegister

const Footer = styled.div`

  padding: 30px 0;
  hr {
    background: #fff;
    height: 1px;
    border: 0;
  }
  .text {
    text-align: center;
    font-weight: 400;

      a {
        text-decoration: none;
        font-size: 15px;
        color: #1877f2;
        }
  }
`
