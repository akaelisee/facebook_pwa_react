import React, { useState } from 'react'

const Signout = ({ submitRegister }) => {
  const [formStateRegister, setFormStateRegister] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })
  const apiUrl = 'http://localhost:4000/register/user'
  const [errorMessageRegister, setErrorMessageRegister] = useState('')

  return (
    <>
      <div>
        <form
          onSubmit={e =>
            submitRegister(
              e,
              formStateRegister,
              setErrorMessageRegister,
              apiUrl
            )
          }
        >
          <div className='form-group'>
            <label> Prénom </label>
            <input
              type='text'
              name='firstname'
              value={formStateRegister.firstname}
              onChange={e =>
                setFormStateRegister({
                  ...formStateRegister,
                  firstname: e.target.value
                })
              }
            />
          </div>
          <div className='form-group'>
            <label> Nom </label>
            <input
              type='text'
              name='lastname'
              value={formStateRegister.lastname}
              onChange={e =>
                setFormStateRegister({
                  ...formStateRegister,
                  lastname: e.target.value
                })
              }
            />
          </div>
          <div className='form-group'>
            <label> Email </label>
            <input
              type='text'
              name='email'
              value={formStateRegister.email}
              onChange={e =>
                setFormStateRegister({
                  ...formStateRegister,
                  email: e.target.value
                })
              }
            />
          </div>
          <div className='form-group'>
            <label> Mot de passe </label>
            <input
              type='text'
              name='password'
              value={formStateRegister.password}
              onChange={e =>
                setFormStateRegister({
                  ...formStateRegister,
                  password: e.target.value
                })
              }
            />
          </div>
          <input type='submit' value='valider' />
          <p style={{ color: 'red', textAlign: 'center' }}>
            {errorMessageRegister}
          </p>
        </form>
      </div>
    </>
  )
}

export default Signout
