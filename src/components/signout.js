import React, { useState } from 'react'
import styled from 'styled-components'

const Signout = ({ submitRegister }) => {
  const [formStateRegister, setFormStateRegister] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    cpassword: ''
  })
  const [iSetp, setISetp] = useState(1)
  const apiUrl = 'https://authentificat.akaelisee.fr/register/user'
  const [errorMessageRegister, setErrorMessageRegister] = useState('')

  return (
    <>
      <FormRegister>
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
          {iSetp === 1 ? (
            <div className='rows'>
              <div className='form-control'>
                <input
                  type='text'
                  name='firstname'
                  value={formStateRegister.firstname}
                  placeholder='Prénom'
                  onChange={e =>
                    setFormStateRegister({
                      ...formStateRegister,
                      firstname: e.target.value
                    })
                  }
                />
              </div>
              <div className='form-control'>
                <input
                  type='text'
                  name='lastname'
                  value={formStateRegister.lastname}
                  placeholder='Nom de famille'
                  onChange={e =>
                    setFormStateRegister({
                      ...formStateRegister,
                      lastname: e.target.value
                    })
                  }
                />
              </div>
            </div>
          ) : (
            <div className='col-auto'>
              <div className='form-control'>
                <input
                  type='email'
                  name='email'
                  value={formStateRegister.email}
                  placeholder='E-mail'
                  onChange={e =>
                    setFormStateRegister({
                      ...formStateRegister,
                      email: e.target.value
                    })
                  }
                />
              </div>
              <div className='form-control'>
                <input
                  type='password'
                  name='password'
                  value={formStateRegister.password}
                  placeholder='Mot de passe'
                  onChange={e =>
                    setFormStateRegister({
                      ...formStateRegister,
                      password: e.target.value
                    })
                  }
                />
              </div>
              <div className='form-control'>
                <input
                  type='password'
                  name='cpassword'
                  value={formStateRegister.cpassword}
                  placeholder='Confirmation du mot de passe'
                  onChange={e =>
                    setFormStateRegister({
                      ...formStateRegister,
                      cpassword: e.target.value
                    })
                  }
                />
              </div>
            </div>
          )}

          <div className='next-form'>
            {formStateRegister.email &&
            formStateRegister.password &&
            formStateRegister.cpassword ? (
              <input type='submit' value='Valider' />
            ) : (
              <></>
            )}
          </div>

          {/* Msg error */}
          <p style={{ color: 'red', textAlign: 'center' }}>
            {errorMessageRegister}
          </p>
        </form>

        {/* Btn suivant */}
        <div className='next-form'>
          {formStateRegister.firstname && formStateRegister.lastname ? (
            <>
              <button
                className={iSetp === 1 ? 'show btn-next' : 'hide btn-next'}
                onClick={() => setISetp(iSetp + 1)}
              >
                Suivant
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </FormRegister>
    </>
  )
}

export default Signout

const FormRegister = styled.div`
  .rows {
    padding: 0 12px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    .form-control {
      margin: 1px 0;
      input {
        width: 142px;
      }
    }
  }

  .col-auto {
    padding: 2px 12px;
    width: 100%;
  }

  .form-control {
    /* padding: 2px 0; */
    margin: 10px 0;
    input {
      position: relative;
      width: 89%;
      padding: 12px 6px;
      border: 1px solid #aaaaaa;
      border-radius: 3px;
      outline: none;
      font-size: 15px;
    }
  }

  input[type='submit'] {
    position: relative;
    padding: 10px;
    width: 93%;
    background-color: #1877f2;
    border: 1px solid #1877f2;
    border-radius: 4px;
    color: #f2eded;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    outline: none;
    cursor: pointer;
  }

  .next-form {
    width: 100%;
    text-align: center;
    .hide {
      display: none;
    }
    .show {
      display: inline-block;
      cursor: pointer;
    }
    .btn-next {
      cursor: pointer;
      position: relative;
      padding: 10px;
      width: 93%;
      background-color: #1877f2;
      border: 1px solid #1877f2;
      border-radius: 4px;
      color: #f2eded;
      font-size: 16px;
      text-decoration: none;
      font-weight: 600;
      outline: none;
    }
  }
`
