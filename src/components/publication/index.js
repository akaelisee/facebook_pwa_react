import React, { useState } from 'react'
import close from '../../assets/close.svg'
import styled, { keyframes } from 'styled-components'

const Publication = props => {
  const [status, setStatus] = useState('')

  return (
    <PagePublication>
      <StatutContainer>
        <Icon onClick={props.close} src={close} alt='Image' />
        <Span> Créer une publication </Span>
        <Span></Span>
      </StatutContainer>
      <Form
        onSubmit={e => {
          setStatus('')
          props.handleSubmit(e, status, setStatus)
        }}
      >
        <Textarea
          placeholder='Que voulez-vous dire ?'
          value={status}
          onChange={e => setStatus(e.target.value)}
        />
        <InputSubmit type='submit' value='Publier' />
      </Form>
    </PagePublication>
  )
}

const PageUp = keyframes`
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
  animation: ${PageUp} 0.4s linear;
`

const StatutContainer = styled.div`
  width: 100%;
  margin: 0 auto 10px auto;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  background-color: #eee;
`
const Icon = styled.img`
  width: 30px;
  font-weight: bold;
`

const Span = styled.span`
  font-weight: bold;
  margin-right: 20px;
`
const Form = styled.form`
  width: 90%;
  margin: 0 auto;
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
export default Publication
