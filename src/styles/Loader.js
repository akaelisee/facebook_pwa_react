import styled, { keyframes } from "styled-components";

// Style loader Component
export const Loading = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
export const LoaderPage = styled.div`
  position: absolute;
  top: 37%;
  left: 45%;
  transform: translate(-50%, -50%);
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #3498db;
  width: 30px;
  height: 30px;
  animation: ${Loading} 1s linear infinite;
`

export const PageFixed = styled.div`
  position: relative;
  height: 100vh;
  background-color: #fff;
`