import React from 'react'
import styled from 'styled-components'
import FaceBookLogo from '../assets/homelogo.png'
import Banniere from '../assets/banniere.jpeg'


export const Logo = () => {
  return (
    <ImageLogo>
        <img src={FaceBookLogo} alt='logo-home' />
    </ImageLogo>
  )
}

export const Banner = () => {
  return (
    <ImageBanniere>
        <img src={Banniere} alt='logo-banner' />
    </ImageBanniere>
  )
}


const ImageLogo = styled.div`
  text-align: center;
  img {
    width: 50px;
  }
`

const ImageBanniere = styled.div`
  img {
    width: 100%;
  }
`

