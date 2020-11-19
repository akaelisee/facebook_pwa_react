import React from 'react'
import Routes from './config/Routes'
import styled from 'styled-components'
import { Detector } from 'react-detect-offline'
import Offline from './components/offline'

function App() {
  return (
    <AppContainer className='App'>
      <Container>
        <Routes></Routes>
        <Detector
          render={({ online }) => {
            if (!online) {
              return <Offline />
            }
            return <></>
          }}
        />
      </Container>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 100%;
  }
`
export default App
