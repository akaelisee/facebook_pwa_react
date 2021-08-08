import React from 'react'
import { Container } from '../styles/StatutStyted'
import { PageOffline } from '../styles/styledComponents'


const Offline = () => {
  return (
    <PageOffline>
      <Container offline>
        <div style={{ margin: '25px', fontSize: '25px', width: '200px' }}>
          <p> Pas de connexion</p>
        </div>
        <div style={{ margin: '25px', fontSize: '25px', width: '200px' }}>
          <p> Veuillez réessayer</p>
        </div>
      </Container>
    </PageOffline>
  )
}

export default Offline
