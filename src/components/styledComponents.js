import styled, { keyframes } from 'styled-components'

//Style statut Page
const StatutContainer = styled.div`
  ${props => {
    if (props.public) {
      return `
      width: 100%;
      margin: 0 auto 10px auto;
      display: flex;
      justify-content: space-between;
      line-height: 50px;
      background-color: #eee;
      `
    } else {
      return `
        width: 100%;
        margin: 5px auto;
        background-color: #ddd;
      `
    }
  }}
`
const Container = styled.div`
  ${props => {
    if (props.offline) {
      return `
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
      `
    } else {
      return `
        width: 100%;
        background-color: #ffffff;
        margin: 5px auto;
        box-shadow: 0 0 1px 0.5px #ffffff;
        `
    }
  }}
`
const ContainerNav = styled.div`
  width: 92%;
  margin: 5px auto;
`
const BlocStatut = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: ${props => props.justifyContent};
`
const StatutImage = styled.img`
  width: ${props => props.width};
`
const LeftStatut = styled.div`
  position: relative;
  margin-top: 3px;
  right: 15px;
`
const Colgroup = styled.div`
  margin: 8px 0;
  position: relative;
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding};
  border-radius: 50%;
  float: ${props => props.float};
`
const SpanName = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: sans-serif;
  color: #fff;
  font-weight: 700;
`
const BlocDown = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  p {
    margin: 3px 0;
  }
  span {
    position: relative;
    float: right;
    margin-left: 8px;
    padding: 4px 0;
    font-weight: 500;
  }
`
const Icon = styled.img`
  ${props => {
    if (props.right) {
      return `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: sans-serif;
      border-radius: 50%;
      font-weight: 900;
      color: #f00;
      `
    } else if (props.background) {
      return `
        width: 100%;
      `
    } else if (props.remove) {
      return `
        width: 25px;
        font-weight: bold;
        padding-right: 25px;
      `
    } else if (props.close) {
      return `
        position: absolute;
        width: 75%;
        left: 6.5px;
        bottom: 6px;
      `
    } else if (props.public) {
      return `
        width: 30px;
        font-weight: bold;
      `
    } else if (props.offline) {
      return `
        width: 100%;
      `
    } else {
      return `
        width: 30px;
        float: left;
      `
    }
  }}
`
const Card = styled.div`
  width: 92%;
  margin: 10px auto;
  background-color: #fff;
`
const TextStatus = styled.div`
  margin: 10px 5px;
  padding-bottom: 5px;
`

// RemoveBtn Component
const PageUp = keyframes`
  from {
    transform: translate(0%, 100%);
  }

  to {
    transform: translate(0%, 0%);
  }
`
const PageDown = keyframes`
  from {
    transform: translate(0%, 0%);
  }

  to {
    transform: translate(0%, 100%);
  }
`
const PageRemove = styled.div`
  width: 100%;
  position: fixed;
  top: 0%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.12);
`
const HrBar = styled.div`
  width: 13%;
  height: 7px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: #fff;
  animation: ${PageUp} 0.4s linear;
`
const CardRemove = styled.div`
  position: relative;
  top: 200px;
  height: 100%;
  animation: ${PageUp} 0.4s linear;
`
const ContainerRemove = styled.div`
  margin-top: 7px;
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  height: 100%;
`
const Span = styled.span`
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
const BtnGroup = styled.div`
  padding: 14px;
  border-bottom: 1px solid;
  display: flex;
`
const ClosePage = styled.div`
  position: relative;
  width: 5%;
  height: 40px;
  margin: 25px auto;
  padding: 5px 16px;
  border-radius: 50%;
  background-color: #fff;
  animation: ${PageDown} 0.4s linear;
`

// Styles Publication Component

const PageUpTwo = keyframes`
  from {
    transform: translate(0%, 100%);
  }

  to {
    transform: translate(0%, 0%);
  }
`
const PagePublication = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  animation: ${PageUpTwo} 0.4s linear;
`
const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  min-height: 400px;
  max-height: 500px;
`
const InputSubmit = styled.input`
  position: absolute;
  top: 0;
  right: 5px;
  align-self: center;
  border: transparent;
  font-size: 17px;
  margin: 15px auto;
`

const PageOffline = styled.div`
  width: 100%;
  position: fixed;
  top: 0%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
`

const Styles = {
  Container,
  StatutContainer,
  ContainerNav,
  BlocStatut,
  StatutImage,
  LeftStatut,
  Colgroup,
  SpanName,
  BlocDown,
  Icon,
  Card,
  TextStatus,
  PageRemove,
  HrBar,
  CardRemove,
  ContainerRemove,
  Span,
  BtnGroup,
  ClosePage,
  PagePublication,
  Textarea,
  InputSubmit,
  PageOffline
}

export default Styles
