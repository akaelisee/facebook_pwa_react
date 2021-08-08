import styled, { keyframes } from 'styled-components'

// Styles Publication Component
const PageUpTwo = keyframes`
  from {
    transform: translate(0%, 100%);
  }

  to {
    transform: translate(0%, 0%);
  }
`
export const PagePublication = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  /* animation: ${PageUpTwo} 0.4s linear; */
`

export const PageOffline = styled.div`
  width: 100%;
  position: fixed;
  top: 0%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
`
