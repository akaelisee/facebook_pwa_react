import React from 'react'
import styled from 'styled-components'
import Routes from './config/Routes'
import {Container} from './styles/Container'

function App() {
  return (
    <AppContainer className='App'>
      <Container>
        <Routes></Routes>
      </Container>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
`
export default App
