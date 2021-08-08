import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import PropTypes from 'prop-types'


const Publication = ({handleSubmit, togglePopup, isOpen}) => {
  const [status, setStatus] = useState('')

  return (
    <Public>
      <PagePublication className={isOpen? 'page-up' : 'page-down'}>
        <form
          onSubmit={e => {
            setStatus('')
            handleSubmit(e, status, setStatus)
          }}
        >
          <div className="text">
            <textarea
              placeholder='Que voulez-vous dire ?'
              value={status}
              onChange={e => setStatus(e.target.value)}
            > </textarea>
          </div>

          <div className="rows-three">
            <div className='close' onClick={togglePopup}>
              <AiOutlineClose />
            </div>
            <span> Créer une publication </span>
            <input type='submit' value='Publier' />
          </div>
        </form>
      </PagePublication>
    </Public>
  )
}

Publication.propTypes = {
  togglePopup: PropTypes.func,
  handleSubmit: PropTypes.func,
  isOpen: PropTypes.bool
}

export default Publication

const Public = styled.div`
    .page-up {
      transform: translateY(0%);
      transition: all 0.4s linear;
      opacity: 1;

    }
    
    .page-down {
      transform: translateY(100%);
      opacity: 0;
      transition: all 0.4s linear;
    }
`

const PagePublication = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 350px;
  margin: 0 auto;
  background-color: #fff;
  opacity: 0;
  transform: translateY(-100%);
  transition: all 0.6s linear;
  z-index: 300;

  @media (max-width: 380px) {
    width: 100%;
  }

  form {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;

    .text {
      padding: 10px 5px;
      textarea {
        width: 100%;
        resize: none;
        border: none;
        outline: none;
        min-height: 400px;
        max-height: 500px;
      }
    }
    .rows-three {
      display: flex !important;
      justify-content: space-between !important;
      line-height: 50px;
      background-color: #eee;
      padding: 0 5px;

      .close {
        align-self: center;
        position: relative;
        top: 4px;
        svg {
          font-size:20px;
          cursor: pointer;
        }

      }
      input {
        align-self: center;
        border: transparent;
        font-size: 16px;
        cursor: pointer;
        padding: 0;
        font-weight: 400;
      }
    }
  }
`
