import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 350px;
  margin: 0 auto;
  background-color: #aaa;
  @media (max-width: 380px) {
    width: 100%;
  }
`

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  .logo__home {
    padding: 20px 0;
  }
  .link__home {
    display: block;
    /* border-radius: 2px 2px 0 0;
    border-top: 1px solid #aaa; */
    text-align: center;
    padding: 10px 0;
    line-height: 20px;
    a {
      text-decoration: none;
      color: #144d83;
    }
    svg {
      font-size: 20px;
      color: #144d83;
    }
  }
`
