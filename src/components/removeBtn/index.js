import React from 'react'
import styled, { keyframes } from 'styled-components'
import close from '../../assets/close.svg'
import trash from '../../assets/trash.svg'

const RemoveBtn = props => {
  return (
    <PageRemove>
      <ClosePage onClick={props.closePopupTwo}>
        <Icon close src={close} />
      </ClosePage>
      <CardRemove>
        <HrBar></HrBar>
        <Container>
          <BtnGroup onClick={() => props.removeStatut(props.index)}>
            <Icon src={trash} />
            <Span>Sumprimer la publication</Span>
          </BtnGroup>
        </Container>
      </CardRemove>
    </PageRemove>
  )
}

export default RemoveBtn

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
const Container = styled.div`
  margin-top: 7px;
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  height: 100%;
`
const Span = styled.span`
  font-size: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`
const Icon = styled.img`
  width: 25px;
  font-weight: bold;
  padding-right: 25px;

  ${props => {
    if (props.close) {
      return `
        position: absolute;
        width: 75%;
        left: 6.5px;
        bottom: 6px;
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
