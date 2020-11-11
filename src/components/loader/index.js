import React from 'react'
import styled, { keyframes } from 'styled-components'

const Loader = () => {
  return (
    <PageFixed>
      <LoaderPage></LoaderPage>
    </PageFixed>
  )
}

const Loading = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
const LoaderPage = styled.div`
  position: absolute;
  top: 37%;
  left: 40%;
  transform: translate(-50%, -50%);
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #3498db;
  width: 40px;
  height: 40px;
  animation: ${Loading} 1s linear infinite;
`

const PageFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
`

export default Loader
