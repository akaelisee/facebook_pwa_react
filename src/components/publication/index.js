import React, { useState } from 'react'
import close from '../../assets/close.svg'
import Styles from '../styledComponents'

const Publication = props => {
  const [status, setStatus] = useState('')

  return (
    <Styles.PagePublication>
      <Styles.StatutContainer public>
        <Styles.Icon public onClick={props.close} src={close} alt='Image' />
        <Styles.Span public> Créer une publication </Styles.Span>
        <Styles.Span public></Styles.Span>
      </Styles.StatutContainer>
      <form
        onSubmit={e => {
          setStatus('')
          props.handleSubmit(e, status, setStatus)
        }}
      >
        <Styles.Textarea
          placeholder='Que voulez-vous dire ?'
          value={status}
          onChange={e => setStatus(e.target.value)}
        />
        <Styles.InputSubmit type='submit' value='Publier' />
      </form>
    </Styles.PagePublication>
  )
}

export default Publication
