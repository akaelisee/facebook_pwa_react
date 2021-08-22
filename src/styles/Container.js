import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 350px;
  margin: 0 auto;
  background-color: #2a2a2a;
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
      color: #1877f2;
    }
    svg {
      font-size: 20px;
      color: #1877f2;
    }
  }
`

export const Span = styled.span`
  font-size: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  ${props => {
    if (props.public) {
      return `
          font-weight: bold;
          margin-right: 20px;
        `
    }
  }}
`
