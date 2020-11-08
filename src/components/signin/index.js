import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Signin = ({ submit }) => {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  return (
    <>
      <div className='login'>
        <form onSubmit={e => submit(e, formState, setErrorMessage, history)}>
          <div className='form-group'>
            <label> Username </label>
            <input
              type='text'
              name='username'
              onChange={e =>
                setFormState({ ...formState, username: e.target.value })
              }
            />
          </div>
          <div className='form-group'>
            <label> password </label>
            <input
              type='password'
              name='password'
              onChange={e =>
                setFormState({ ...formState, password: e.target.value })
              }
            />
          </div>
          <input type='submit' value='Valider' />
        </form>
        {errorMessage}
      </div>
    </>
  )
}

export default Signin
